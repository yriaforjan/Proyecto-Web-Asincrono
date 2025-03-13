import { updateSearchBar } from "../../components/Navbar/Navbar";
import { cleanPage } from "../../utils/cleanPage";
import { Gallery } from "../../components/Gallery/Gallery";

export const Popular = () => {
    updateSearchBar(true, "Popular");

    const section = document.querySelector("section");
    cleanPage(section);

    const main = document.querySelector("main");
    const { element: popularGallery, printImages, createPageControls } = Gallery();
    main.appendChild(popularGallery);
    createPageControls();
    printImages("popular", (Math.floor(Math.random() * 5) + 1));
};