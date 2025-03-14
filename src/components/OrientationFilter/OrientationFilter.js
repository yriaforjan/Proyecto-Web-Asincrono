import "./OrientationFilter.css";

export const OrientationFilter = () => {
    const orientations = ["all", "landscape", "portrait", "squarish"];

    let orientationContainer = document.querySelector("#orientations");

    if (orientationContainer){
        orientationContainer.remove();
    };

    orientationContainer = document.createElement("div");
    orientationContainer.id = "orientations";

    const images = {
        all: "/icons/all.png",
        landscape: "/icons/landscape.png",
        portrait: "/icons/portrait.png",
        squarish: "/icons/squarish.png"
    };

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
            input.checked = true;
        };

        orientationContainer.appendChild(label);
    };

    return orientationContainer;
};