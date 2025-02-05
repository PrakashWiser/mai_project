import React from 'react'

function Image({ link, className, alt,style ,height}) {
    return (
        <img className={className} style={style} src={link} alt={alt} height={height}/>
    )
}

export default Image