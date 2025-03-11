import "./Info.css";
import { updateSearchBar } from "../../components/Navbar/Navbar";
import { cleanPage } from "../../utils/cleanPage";

export const Info = () => {
     updateSearchBar(true, "Information");

    const section = document.querySelector("section");
    cleanPage(section);
    section.id = "info";

    section.innerHTML = `
        <h1>PixHive</h1>
        <p>PixHive is a web application developed exclusively for educational purposes, designed to learn about API consumption and interactive interface management. It has no commercial intent and does not seek to generate revenue but rather provides a hands-on experience to improve web development skills. Through this app, users can explore an Unsplash image gallery, experiment with search functionality, and enjoy an intuitive interface. PixHive is an unregistered brand.</p>
    `;
}