const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export const getImages = async (query = "moon", page = 1, imgOrientation = "") => {
    let url = `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${query}&client_id=${ACCESS_KEY}`;

    if (imgOrientation != ""){
        url += `&orientation=${imgOrientation}`;
    };

    try{
        const res = await fetch(url);
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