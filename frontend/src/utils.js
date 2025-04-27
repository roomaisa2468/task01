import { toast } from 'react-toastify';

export const notify = (message, type) => {
    toast[type](message);
}

// export const API_URL = 'https://mern-task-manager-app-deploy-api.vercel.app';
// utils.js
export const API_URL = "https://task01-rose.vercel.app"; // Ensure this points to your backend's URL

