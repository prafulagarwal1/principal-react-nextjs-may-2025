import axios from 'axios';
import IWorkshop from '../models/IWorkshop';

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
        `https://workshops-server.onrender.com/workshops`,
        {
            // params: params
            params
        }
    );

    return response.data;
}

export {
    getWorkshops
};