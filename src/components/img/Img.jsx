import Image from 'next/image'
import React from 'react'

export default function Img({ src = "", className = "", width = 50, height = 50, ...props }) {
    return (
        <Image src={src} alt="img" className={`${className}`} width={width} height={height} {...props} />
    )
}
