import { useState, useEffect } from 'react';
import axios from 'axios';

const useCategories = () => {
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(false);

    const fetchCategories = async () => {
        setLoading(true);
        
        const response = await axios.get('http://c665c96f0be5.ngrok.io/api/categories');
        const json = response.data;

        setLoading(false);
        setCategories(json);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return { categories, loading, refetch: fetchCategories };
};

export default useCategories;