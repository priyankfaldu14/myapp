export const Imagezoomin=(url)=>{
    document.documentElement.setProperty('--imageUrl',`url(${url})`)
    document.documentElement.setProperty('--image-display',`flex`)
}
export const Imagezoomout=()=>{
    
    document.documentElement.setProperty('--image-display',`none`)
}

