

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=30&api_key=LBVMB99LWGBQeagYo9tSKUyPYKTSiBg1`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        } // ? si vienen las imágenes, que las utilice
    })

    return gifs;

}