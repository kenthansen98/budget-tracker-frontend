import axios from 'axios';

const useAddCategory = () => {
    const addCategory = async ({ name, amount, type }) => {
        const response = await axios.post('http://c665c96f0be5.ngrok.io/api/categories', {
            'name': name, 
            'amount': amount, 
            'cat_type': type,
        });
        return response.data;
    };
    return [addCategory];
};

export default useAddCategory;