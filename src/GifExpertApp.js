import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    // const categories = ['One Punch', 'Samuraí X', 'Dragon Ball']
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    //     /*el setCategories puede tener un callback en el cual el primer argumento es el valor del estado anterior y luego tiene que regresar el nuevo estado */
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            {/* Mando la referencia a setCategories */}
            <hr />

            <ol>
                {
                    // categories.map(category => {
                    //     return <li key={category}> {category} </li>
                    //     /* el key no puede ser el indice y tiene que ser único */
                    // })
                    categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
};
