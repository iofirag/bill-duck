// import _ from 'lodash';
import { Identifier } from '../types';
import { Stock } from './Stock';


export class StockMarket {
    public name: string = '';
    public stockList: Identifier[] = [];
    public country: string = '';
    public sectorList: string[] = [];

    constructor() {
    }
}