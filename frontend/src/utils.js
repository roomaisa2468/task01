import { toast } from 'react-toastify';

export const notify = (message, type) => {
    toast[type](message);
}

export const API_URL = 'https://task01-ui-rumaisas-projects-78495398.vercel.app/';
