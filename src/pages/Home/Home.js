import { updateSearchBar } from "../../components/Navbar/Navbar";
import { cleanPage } from "../../utils/cleanPage";
import { Gallery } from "../../components/Gallery/Gallery";
import { SuggestionBtns } from "../../components/SuggestionBtns/SuggestionBtns";

export const Home = () => {
    updateSearchBar(false, "Search...");

    const section = document.querySelector("section");
    cleanPage(section);

    const main = document.querySelector("main");
    const { element: homeGallery, printImages, createPageControls } = Gallery();
    main.appendChild(homeGallery);
    createPageControls();

    document.addEventListener("DOMContentLoaded", () => {
        searchFunction(homeGallery, printImages, createPageControls);
    });
};

const searchFunction = (homeGallery, printImages, createPageControls) => {
    const searchBar = document.querySelector("#searchBar");
        if (window.innerWidth <= 700){
            searchBar.addEventListener("input", () => {
                const currentQuery = searchBar.value.trim();
                if (currentQuery.length > 0) {
                    cleanPage(homeGallery);
                    printImages(currentQuery, 1);
                    createPageControls();
                };
            });
        };
        searchBar.addEventListener("keyup", (ev) => {
            if (ev.code === "Enter") {
                const currentQuery = searchBar.value.trim();
                cleanPage(homeGallery);
                printImages(currentQuery, 1);
                createPageControls();
                searchBar.value = "";
            };
        });
};