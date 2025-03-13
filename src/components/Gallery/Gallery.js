import "./Gallery.css";
import { getImages } from "../../data/data";
import { cleanPage } from "../../utils/cleanPage";
import { SuggestionBtns } from "../SuggestionBtns/SuggestionBtns";

export const Gallery = () => {
    const gallery = document.querySelector("section");
    gallery.id = "gallery";

    let currentPage = 0;
    let currentQuery = "";

    const printImages = async (query = "moon", page = 1) => {
        currentQuery = query;
        currentPage = page;
        const images = await getImages(query, page);
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
            /* addSuggestion(); */
            if (pageControls){
                pageControls.remove();
            };
        };
    };

    /* const addSuggestion = () => {
        const searchBar = document.querySelector("#searchBar");
        const suggestionBtns = document.querySelectorAll(".suggestionBtn");
        if (suggestionBtns){
            for (const suggestionBtn of suggestionBtns){
                suggestionBtn.addEventListener("click", () => {
                    searchBar.value = suggestionBtn.innerText;
                    searchBar.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter" }))
                });
            };
        };
    }; */

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

    printImages();

    return { element: gallery, printImages, createPageControls };
};