// import _ from 'lodash';
import { Identifier } from '../types';
import { Stock } from './Stock';


export class Quote {
    public date: string = '';
    public open: number = 0;
    public high: number = 0;
    public low: number = 0;
    public close: number = 0;
    public adjustedClose: number = 0;
    public volume: number = 0;
    public dividedAmount: number = 0;
    public splitCoefficient: number = 0;

    constructor() {
        
    }
}