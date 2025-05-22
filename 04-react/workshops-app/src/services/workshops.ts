import axios from 'axios';
import IWorkshop from '../models/IWorkshop';

const getWorkshops = async () => {
    const response = await axios.get<IWorkshop[]>( `https://workshops-server.onrender.com/workshops` );
    return response.data;
}

export {
    getWorkshops
};