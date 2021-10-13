import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({ title, url }) => {


    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

/*
    1. Enzime
    2. Enzyme to Json
    3. Debe de mostrar el componente
        * shallow
        * wrapper
        * wrapper .toMatchSnapshot
*/

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}