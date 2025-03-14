import "./OrientationFilter.css";

export const OrientationFilter = () => {
    const orientations = ["landscape", "portrait", "squarish", "all"];
    const orientationContainer = document.createElement("div");
    orientationContainer.id = "orientations";

    const images = {
        landscape: "/icons/landscape.png",
        portrait: "/icons/portrait.png",
        squarish: "/icons/squarish.png",
        all: "/icons/all.png"
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

        orientationContainer.appendChild(label);
    };
    return orientationContainer;
};