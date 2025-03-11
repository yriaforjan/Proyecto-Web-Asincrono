import "./style.css";
import { changeTheme, Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Info } from "./pages/Info/Info";
import { linkPage } from "./utils/linkPage";
import { Popular } from "./pages/Popular/Popular";

const header = document.querySelector("header");
header.innerHTML = Header();

const main = document.querySelector("main");
const aside = document.createElement("aside");
main.appendChild(aside);
aside.innerHTML = Navbar();
const section = document.createElement("section");
main.appendChild(section);

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Home();

linkPage("#homelink", Home);
linkPage("#popularlink", Popular);
linkPage("#infolink", Info);

changeTheme();