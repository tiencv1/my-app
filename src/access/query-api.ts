import { TJokes } from '@root/models';
import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export const QueryAPI = {
    post: {
        getOnce: async <T>(id: string): Promise<AxiosResponse<T>> =>
            await axiosClient.get(id),
        getList: async <T>(query: string = ''): Promise<AxiosResponse<T>> =>
            await axiosClient.get(query),
    },
    jokes: {
        getRandom: async (): Promise<AxiosResponse<TJokes>> =>
            await axios.get('https://api.chucknorris.io/jokes/random'),
    },
};
