const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export const getImages = async (query = "moon") => {
    try{
        const res = await fetch(`https://api.unsplash.com/search/photos?page=1&client_id=${ACCESS_KEY}&query=${query}&per_page=20`);
        const data = await res.json();
        return mapImages(data.results);
    } catch (error){
        alert("Unable to fetch images");
    };
};

const mapImages = (images) => {
    const mappedImages = images.map(image => ({
        alt: image.alt_description,
        image: image.urls.regular,
        originalImage: image.urls.full
    }));
    return mappedImages;
};