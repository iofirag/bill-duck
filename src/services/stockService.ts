import fetch from 'node-fetch';

export const fetchData = async (url: string, options: any): Promise<any> => {
    return await fetch(url, options);
};