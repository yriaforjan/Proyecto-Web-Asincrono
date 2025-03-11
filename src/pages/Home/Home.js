import { updateSearchBar } from "../../components/Navbar/Navbar";
import { cleanPage } from "../../utils/cleanPage";
import { Gallery } from "../../components/Gallery/Gallery";

export const Home = () => {
    updateSearchBar(false, "Search...");

    const section = document.querySelector("section");
    cleanPage(section);

    const main = document.querySelector("main");
    const { element: homeGallery, printImages } = Gallery();
    main.appendChild(homeGallery);

    document.addEventListener("DOMContentLoaded", () => {
        const searchBar = document.querySelector("#searchBar");
        searchBar.addEventListener("keyup", (ev) => {
            if (ev.code === "Enter") {
                const query = searchBar.value;
                cleanPage(homeGallery);
                printImages(query);
                searchBar.value = "";
            };
        });
    });
};