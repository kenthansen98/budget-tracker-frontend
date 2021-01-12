import { useState, useEffect } from 'react';

const useCategories = () => {
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(false);

    const fetchCategories = async () => {
        setLoading(true);
        
        const response = await fetch('http://eb58feb594d4.ngrok.io/api/categories');
        const json = await response.json();
        //console.log(json.categories);

        setLoading(false);
        setCategories(json);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return { categories, loading, refetch: fetchCategories };
};

export default useCategories;