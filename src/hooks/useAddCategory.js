import axios from 'axios';

const useAddCategory = () => {
    const addCategory = async ({ name, amount, type }) => {
        const response = await axios.post('http://1b3d6df3e88c.ngrok.io/api/categories', {
            'name': name, 
            'amount': amount, 
            'cat_type': type,
        });
        return response.data;
    };
    return [addCategory];
};

export default useAddCategory;