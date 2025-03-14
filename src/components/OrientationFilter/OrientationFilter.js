import "./OrientationFilter.css";

export const OrientationFilter = () => {
    const orientations = ["all", "landscape", "portrait", "squarish"];
    const orientationContainer = document.createElement("div");
    orientationContainer.id = "orientations";

    const images = {
        all: "/icons/all.png",
        landscape: "/icons/landscape.png",
        portrait: "/icons/portrait.png",
        squarish: "/icons/squarish.png"
    };

    let defaultFilter;

    for (const orientation of orientations){
        const label = document.createElement("label");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "orientation";
        input.value = orientation;
        label.appendChild(input);

        const img = document.createElement("img");
        img.src = images[orientation];
        img.alt = orientation;
        label.appendChild(img);

        if (orientation === "all") {
            img.className = "hidden";
            defaultFilter = img;
        }

        orientationContainer.appendChild(label);
    };

    orientationContainer.addEventListener("change", () => {
        if (defaultFilter){
            defaultFilter.classList.remove("hidden");
        };

        if (orientationContainer.querySelector("input[value='all']:checked")) {
            defaultFilter.classList.add("hidden");
        };
    });

    return orientationContainer;
};