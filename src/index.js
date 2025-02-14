"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./activities/arts-and-crafts/finger-painting/index");
const activity = (0, index_1.getFingerPaintingActivity)();
const appDiv = document.getElementById('app');
if (appDiv) {
    appDiv.innerHTML = `
        <h1>${activity.title}</h1>
        <p>Age Range: ${activity.ageRange}</p>
        <h2>Materials:</h2>
        <ul>
        ${activity.materials.map(material => `<li>${material}</li>`).join('')}
        </ul>
        <h2>Instructions:</h2>
        <ol>
        ${activity.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
        </ol>
    `;
}
else {
    console.error("App div not found!");
}
