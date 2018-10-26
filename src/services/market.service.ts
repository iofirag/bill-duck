export const saveMarketByCondition = async (model: any, condJson: any, market_ta: any, op: any): Promise<any> => {
    await model.findOneAndUpdate(condJson, market_ta, { upsert: true, new: true },
        (err: any, res: any) => {
            if (err) {
                console.error(err)
            }
            if (res) {
                console.log('doc saved!')
            }
        });
}