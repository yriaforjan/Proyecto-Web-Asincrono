import "./Navbar.css";

export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        changeIcon();
    });
};

export const changeIcon = () => {
    const themeBtn = document.querySelector("#themeBtn");
    if (themeBtn.innerText === "☀"){
        themeBtn.innerText = "☾";
    } else{
        themeBtn.innerText = "☀";
    };
};

export const updateSearchBar = (disabled, placeholder) => {
    const searchBar = document.querySelector("#searchBar");
    searchBar.disabled = disabled;
    searchBar.placeholder = placeholder;
};

export const Navbar = () => `
<nav>
    <ul>
        <li>
            <a href="#" id="homelink"><img src="/icons/home.png" alt="Home"></a>
        </li>
        <li>
            <a href="#" id="popularlink"><img src="/icons/favs.png" alt="Popular"></a>
        </li>
        <li>
            <a href="#" id="infolink"><img src="/icons/info.png" alt="Info"></a>
        </li>
    </ul>
    <button id="themeBtn">☀</button>
</nav>
`;