import { useState, useEffect } from 'react';

const useCategories = () => {
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(false);

    const fetchCategories = async () => {
        setLoading(true);
        
        const response = await fetch('http://7e0ef4f8b30e.ngrok.io/api/categories');
        const json = await response.json();

        setLoading(false);
        setCategories(json);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return { categories, loading, refetch: fetchCategories };
};

export default useCategories;