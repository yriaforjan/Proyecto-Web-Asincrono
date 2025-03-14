import "./Gallery.css";
import { getImages } from "../../data/data";
import { cleanPage } from "../../utils/cleanPage";
import { SuggestionBtns } from "../SuggestionBtns/SuggestionBtns";
import { OrientationFilter } from "../OrientationFilter/OrientationFilter";

export const Gallery = () => {
    const gallery = document.querySelector("section");
    gallery.id = "gallery";

    let currentPage = 0;
    let currentQuery = "";
    let imgOrientation = "";

    if (!document.querySelector("#orientations")){
        gallery.parentElement.insertBefore(OrientationFilter(), gallery);
    }

    const addOrientationFilter = () => {
        const orientationRadios = document.querySelectorAll('input[name="orientation"]');
        
        for (const orientationRadio of orientationRadios){
            orientationRadio.addEventListener("change", () => {
                imgOrientation = document.querySelector('input[name="orientation"]:checked').value;
                if (imgOrientation === "all"){
                    imgOrientation = "";
                }
                cleanPage(gallery);
                printImages(currentQuery, 1);
            });
        };
    };

    const printImages = async (query = "moon", page = 1) => {
        currentQuery = query;
        currentPage = page;
        const images = await getImages(query, page, imgOrientation);
        const pageControls = document.querySelector("#pageControls");

        cleanPage(gallery);
        
        if (images.length){
            const ul = document.createElement("ul");
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

            if (!pageControls){
                createPageControls();
            };
        } else{
            const notFound = document.createElement("h2");
            notFound.innerText = "Nothing here... try searching for something else?";
            gallery.appendChild(notFound);

            gallery.appendChild(SuggestionBtns());

            if (pageControls){
                pageControls.remove();
            };
        };
    };

    const createPageControls = () => {
        let pageControls = document.querySelector("#pageControls");

        if (pageControls){
            pageControls.remove();
        };

        pageControls = document.createElement("div");
        pageControls.id = "pageControls";

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

    addOrientationFilter();
    printImages();

    return { element: gallery, printImages, createPageControls };
};