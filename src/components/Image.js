import React from 'react'

function Image({ link, className, alt,style }) {
    return (
        <img className={className} style={style} src={link} alt={alt} />
    )
}

export default Image