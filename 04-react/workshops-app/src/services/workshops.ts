import axios from 'axios';
import IWorkshop from '../models/IWorkshop';

const apiUrl = process.env.REACT_APP_API_URL;

const getWorkshops = async (page : number = 1, category: string = '') => {
    const params: {
        _page: number;
        category?: string
    } = {
        _page: page,
    };

    if (category !== '') {
        params.category = category;
    }

    const response = await axios.get<IWorkshop[]>(
        `${apiUrl}/workshops`,
        {
            // params: params
            params
        }
    );

    return response.data;
};

const getWorkshopById = async (id: number) => {
    const response = await axios.get<IWorkshop>(
        `${apiUrl}/workshops/${id}`
    );

    return response.data;
};

export {
    getWorkshops,
    getWorkshopById
};