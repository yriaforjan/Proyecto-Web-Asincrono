import "./Gallery.css";
import { getImages } from "../../data/data";
import { cleanPage } from "../../utils/cleanPage";

export const Gallery = () => {
    const gallery = document.querySelector("section");
    gallery.id = "gallery";

    let currentPage = 0;
    let currentQuery = "";

    const printImages = async (query = "moon", page = 1) => {
        currentQuery = query;
        currentPage = page;
        const images = await getImages(query, page);
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
        };

        createPageControls();
    };

    const createPageControls = () => {
        if (!document.querySelector(".pageControls")){
            const pageControls = document.createElement("div");
            pageControls.classList.add("pageControls");

            const prevBtn = document.createElement("button");
            prevBtn.innerText = "❮";
            prevBtn.disabled = true;
            pageControls.appendChild(prevBtn);
            
            const nextBtn = document.createElement("button");
            nextBtn.innerText = "❯";
            pageControls.appendChild(nextBtn);

            gallery.parentElement.appendChild(pageControls);

            addPageControl(prevBtn, nextBtn);
        };
    };
    
    const addPageControl = (prevBtn, nextBtn) => {
        prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                printImages(currentQuery, currentPage);
                window.scrollTo(0, 0);
                if (currentPage === 1) {
                    prevBtn.disabled = true;
                };
            };
        });
        nextBtn.addEventListener("click", () => {
            currentPage++;
            printImages(currentQuery, currentPage);
            window.scrollTo(0, 0);
            if (currentPage != 1) {
                prevBtn.disabled = false;
            };
        });
    };

    printImages();

    return { element: gallery, printImages };
};