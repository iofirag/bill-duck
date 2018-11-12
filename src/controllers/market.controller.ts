import * as express from 'express';
import { TA_row } from "../types";
import * as csvtojson from 'csvtojson';
import { fetchData, upsertStocks } from "../services/stock.service";
import { TaseUrl } from "../static";
import { MarketM } from "../classes";
import { saveMarketByCondition } from "../services/market.service";

export const initAllMarkets = async (req: express.Request, res: express.Response) => {
    const marketList: any[] = [];
    marketList.push( await initTaMarket() )
    return res.json({ success: 1, data: marketList});
}

const initTaMarket = async () => {
    const jsonData = async (csvContent: string): Promise<TA_row[]> => {
        // const jsonArray = await csv().fromFile(csvFilePath);
        const stockList: TA_row[] = await csvtojson({
            noheader: false,
            headers: ['name', 'symbol', 'ISIN', 'index', 'lastPrice', 'changePrecent', 'volume', 'lastTrade']
        }).fromString(csvContent);
        stockList.shift()   // Remove name: 'As of  07/10/2018 10:01'
        stockList.shift()   // Remove headers

        return stockList;
    };

    

    const ta_res = await fetchData(TaseUrl, { method: 'GET' });
    const csvContent: string = await ta_res.text();
    const stockTaRowList: TA_row[] = await jsonData(csvContent);
    const stockAnyList: { symbol: string }[] = stockTaRowList.map((s: any) => {
        return {
            symbol: s.symbol
        }
    });
    
    // Create market
    const market: any = {
        name: 'TA',
        country: 'IL',
        sectorList: ['TA35', 'TA100'],
        stockList: stockAnyList
    };
    // Update market obj
    await saveMarketByCondition(MarketM, { name: 'ta', country: 'il' }, market);

    const stockDetailsList: { name: string, symbol: string }[] = stockTaRowList.map((s: any) => {
        return {
            name: s.name,
            symbol: s.symbol
        }
    });
    await upsertStocks(market.country, stockDetailsList)
    return market;
}