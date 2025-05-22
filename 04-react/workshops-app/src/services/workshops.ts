import axios from 'axios';
import IWorkshop from '../models/IWorkshop';

const getWorkshops = async (page : number) => {
    const response = await axios.get<IWorkshop[]>(
        `https://workshops-server.onrender.com/workshops`,
        {
            params: {
                _page: page
            }
        }
    );

    return response.data;
}

export {
    getWorkshops
};