import "./Gallery.css";
import { getImages } from "../../data/data";
import { cleanPage } from "../../utils/cleanPage";

export const Gallery = () => {
    const gallery = document.querySelector("section");
    gallery.id = "gallery";

    const printImages = async (query = "moon") => {
        const images = await getImages(query);
        cleanPage(gallery);
        const ul = document.createElement("ul");
        if (images.length){
            for (const image of images) {
                const li = document.createElement("li");
                li.innerHTML = `
                    <a href="${image.originalImage}" target="_blank">
                        <img src="${image.image}" alt="${image.alt}"/>
                    </a>
                `;
                ul.appendChild(li);
            };
            gallery.appendChild(ul);
        } else{
            const notFound = document.createElement("h2");
            notFound.innerText = "Nothing here... try searching for something else?";
            gallery.appendChild(notFound);
        }
        
    };

    printImages();

    return { element: gallery, printImages };
};