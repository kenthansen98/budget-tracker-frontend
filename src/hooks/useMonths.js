import { useState, useEffect } from 'react';
import axios from 'axios';

const useMonths = () => {
    const [months, setMonths] = useState();
    const [loading, setLoading] = useState(false);

    const fetchMonths = async () => {
        setLoading(true);
        
        const response = await axios.get('http://c665c96f0be5.ngrok.io/api/months');
        const json = response.data;

        setLoading(false);
        setMonths(json);
    };

    useEffect(() => {
        fetchMonths();
    }, []);

    return { months, loading, refetch: fetchMonths };
};

export default useMonths;