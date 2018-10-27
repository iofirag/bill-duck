export const saveMarketByCondition = async (model: any, condJson: any, market_ta: any): Promise<any> => {
    const op = { upsert: true, new: true };
    await model.findOneAndUpdate(condJson, market_ta, op,
        (err: any, res: any) => {
            if (err) {
                console.error(err)
            }
            if (res) {
                console.log('doc saved!')
            }
        });
}