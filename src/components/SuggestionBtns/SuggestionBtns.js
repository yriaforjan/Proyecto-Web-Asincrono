import "./SuggestionBtns.css";

export const SuggestionBtns = () => {
    const suggestions = ["nature", "ocean", "mountains", "forest", "city"];
    const suggestionContainer = document.createElement("div");
    suggestionContainer.id = "suggestions";

    for (const suggestion of suggestions){
        const btn = document.createElement("button");
        btn.className = "suggestionBtn";
        btn.innerText = suggestion;

        addSuggestion(btn);

        suggestionContainer.appendChild(btn);
    };
    return suggestionContainer;
};

const addSuggestion = (btn) => {
    btn.addEventListener("click", () => {
        searchBar.value = btn.innerText;

        const searchEvent = new KeyboardEvent("keyup", {
            key: "Enter",
            code: "Enter"
        })
        searchBar.dispatchEvent(searchEvent);
    });
}