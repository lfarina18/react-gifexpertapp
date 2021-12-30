import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    // Solo se ejecuta cuando es renderizado por primera vez si está [] vacio.

    useEffect(() => {
        getGifs(category).then((imgs) => {
            setState({
                data: imgs,
                loading: false,
            });
        });
    }, [category]);

    return state; // {data:[], loading: true};
};
