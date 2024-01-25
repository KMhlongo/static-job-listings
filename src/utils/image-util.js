function getImageURL(name) {
    return new URL(`../assets/images/${name}.svg`, import.meta.url).href
}

export {getImageURL};