/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ActivityCard.ts":
/*!****************************************!*\
  !*** ./src/components/ActivityCard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActivityCard: () => (/* binding */ ActivityCard)\n/* harmony export */ });\nfunction ActivityCard(activity) {\n    return `\n        <div class=\"activity-card\">\n        <h3>${activity.title}</h3>\n        <p class=\"age-range\">Ages: ${activity.ageRange}</p>\n        <img src=\"${activity.imageUrl}\" alt=\"${activity.title}\" class=\"activity-image\">\n        <button class=\"button\" id=\"view-details-button-${activity.id}\">View Details</button>\n        </div>\n    `;\n}\n\n\n//# sourceURL=webpack://budugu/./src/components/ActivityCard.ts?");

/***/ }),

/***/ "./src/components/ActivityModal.ts":
/*!*****************************************!*\
  !*** ./src/components/ActivityModal.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActivityModal: () => (/* binding */ ActivityModal)\n/* harmony export */ });\nfunction ActivityModal(activity) {\n    return `\n        <div id=\"activity-modal\" class=\"modal\">\n            <div class=\"modal-content\">\n                <span class=\"close-button\">×</span>\n                <h2>${activity.title}</h2>\n                <p><strong>Age Range:</strong> ${activity.ageRange}</p>\n                <p><strong>Time Estimate:</strong> ${activity.timeEstimate}</p>\n                <p><strong>Best Time:</strong> ${activity.bestTime}</p>\n                <p><strong>Location:</strong> ${activity.suitableLocation}</p>\n\n                ${activity.learningObjectives ? `\n                <h3>Learning Objectives:</h3>\n                <ul>\n                    ${activity.learningObjectives.map(objective => `<li>${objective}</li>`).join('')}\n                </ul>\n                ` : ''}\n\n                <h3>Materials:</h3>\n                <ul>\n                    ${activity.materials.map(material => `<li>${material}</li>`).join('')}\n                </ul>\n\n                <h3>Instructions:</h3>\n                <ol>\n                    ${activity.instructions.map(instruction => `<li>${instruction}</li>`).join('')}\n                </ol>\n            </div>\n        </div>\n    `;\n}\n\n\n//# sourceURL=webpack://budugu/./src/components/ActivityModal.ts?");

/***/ }),

/***/ "./src/data/activities.json":
/*!**********************************!*\
  !*** ./src/data/activities.json ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":\"finger-painting-1\",\"category\":\"Indoor Activities\",\"subcategory\":\"painting\",\"title\":\"Finger Painting Fun\",\"ageRange\":\"2-4\",\"materials\":[\"Finger paints\",\"Large paper\",\"Apron or old clothes\"],\"instructions\":[\"Cover the table with paper.\",\"Put a small amount of each paint color on the paper.\",\"Let your child use their fingers to create colorful designs!\",\"Wash hands thoroughly afterwards.\"],\"imageUrl\":\"icons/budugu-192.png\",\"timeEstimate\":\"20-30 minutes\",\"bestTime\":\"Anytime\",\"suitableLocation\":\"Indoor\",\"learningObjectives\":[\"Develop fine motor skills\",\"Explore colors\",\"Encourage creativity\"]},{\"id\":\"nature-walk-1\",\"category\":\"Outdoor Activities\",\"subcategory\":\"nature\",\"title\":\"Nature Walk Scavenger Hunt\",\"ageRange\":\"3-6\",\"materials\":[\"Scavenger hunt list\",\"Bag or basket\"],\"instructions\":[\"Create a list of items to find on a nature walk (e.g., a leaf, a rock, a feather).\",\"Go on a nature walk and have your child find the items on the list.\",\"Collect the items in a bag or basket.\"],\"imageUrl\":\"icons/budugu-192.png\",\"timeEstimate\":\"30-45 minutes\",\"bestTime\":\"Morning or Afternoon\",\"suitableLocation\":\"Outdoor\",\"learningObjectives\":[\"Learn about nature\",\"Develop observation skills\",\"Encourage physical activity\"]}]');\n\n//# sourceURL=webpack://budugu/./src/data/activities.json?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ActivityCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ActivityCard */ \"./src/components/ActivityCard.ts\");\n/* harmony import */ var _components_ActivityModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ActivityModal */ \"./src/components/ActivityModal.ts\");\n/* harmony import */ var _data_activities_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/activities.json */ \"./src/data/activities.json\");\n\n\n\n// Helper function to display activities\n// Helper function to display activities\nfunction displayActivities(activities, appDiv, categoryTitle) {\n    appDiv.innerHTML = '';\n    // Create the back to main menu button\n    const backButton = document.createElement('button');\n    backButton.textContent = 'Back to Main Menu';\n    backButton.className = 'back-button';\n    backButton.addEventListener('click', () => {\n        loadActivities(appDiv);\n    });\n    // Create a header container and add elements\n    const headerContainer = document.createElement('div');\n    headerContainer.className = 'activity-header';\n    // Add a header title\n    const headerTitle = document.createElement('h2');\n    headerTitle.textContent = categoryTitle;\n    headerContainer.appendChild(headerTitle);\n    headerContainer.appendChild(backButton); // Add the back button in the right place for right formatting\n    appDiv.appendChild(headerContainer);\n    const activityContainer = document.createElement('div');\n    activityContainer.className = 'activity-container';\n    activities.forEach(activity => {\n        activityContainer.innerHTML += (0,_components_ActivityCard__WEBPACK_IMPORTED_MODULE_0__.ActivityCard)(activity);\n    });\n    // Append the activity container to the appDiv\n    appDiv.appendChild(activityContainer);\n    activities.forEach(activity => {\n        const button = document.getElementById(`view-details-button-${activity.id}`);\n        if (button) {\n            button.addEventListener('click', () => {\n                const modalDiv = document.createElement('div');\n                modalDiv.innerHTML = (0,_components_ActivityModal__WEBPACK_IMPORTED_MODULE_1__.ActivityModal)(activity);\n                document.body.appendChild(modalDiv);\n                const modal = document.getElementById('activity-modal');\n                if (modal) {\n                    modal.style.display = \"block\";\n                    const closeButton = document.querySelector('.close-button');\n                    if (closeButton) {\n                        closeButton.addEventListener('click', () => {\n                            modal.style.display = \"none\";\n                            document.body.removeChild(modalDiv);\n                        });\n                    }\n                    else {\n                        console.error(\"Close button not found in modal!\");\n                    }\n                }\n                else {\n                    console.error(\"Modal element not found!\");\n                }\n            });\n        }\n        else {\n            console.error(\"View details button not found!\");\n        }\n    });\n}\nasync function loadActivities(appDiv) {\n    // Error handling for the app div is not available\n    if (!appDiv) {\n        console.error(\"App div not found!\");\n        return;\n    }\n    // Clean the div for new categories\n    appDiv.innerHTML = '';\n    // Load activities data.\n    try {\n        const activities = _data_activities_json__WEBPACK_IMPORTED_MODULE_2__;\n        // Main Category Tiles\n        const categoryTiles = {\n            \"Indoor Activities\": activities.filter(activity => activity.suitableLocation.toLowerCase() === 'indoor'),\n            \"Outdoor Activities\": activities.filter(activity => activity.suitableLocation.toLowerCase() === 'outdoor'),\n        };\n        const categoryContainer = document.createElement('div');\n        categoryContainer.className = 'category-container';\n        Object.keys(categoryTiles).forEach(category => {\n            const categoryTile = document.createElement('div');\n            categoryTile.className = 'category-tile';\n            categoryTile.textContent = category;\n            categoryTile.addEventListener('click', () => {\n                // To avoid duplicating what's going on, reuse with category and appDiv\n                displayActivities(categoryTiles[category], appDiv, category);\n            });\n            categoryContainer.appendChild(categoryTile);\n        });\n        appDiv.appendChild(categoryContainer); // Append the container to the #app div\n        const ageBasedTiles = {\n            \"Toddler Activities (18 months - 3 years)\": activities.filter(activity => {\n                const [min, max] = activity.ageRange.split('-').map(Number);\n                return min >= 1.5 && max <= 3;\n            }),\n            \"Preschool Activities (3-5 years)\": activities.filter(activity => {\n                const [min, max] = activity.ageRange.split('-').map(Number);\n                return min >= 3 && max <= 5;\n            }),\n            \"Kindergarten Activities (3-6 years)\": activities.filter(activity => {\n                const [min, max] = activity.ageRange.split('-').map(Number);\n                return min >= 5 && max <= 6;\n            })\n        };\n        // Age based Category\n        const ageContainer = document.createElement('div');\n        ageContainer.className = 'age-container';\n        Object.keys(ageBasedTiles).forEach(ageRange => {\n            const ageTile = document.createElement('div');\n            ageTile.className = 'age-tile';\n            ageTile.textContent = ageRange;\n            ageTile.addEventListener('click', () => {\n                displayActivities(ageBasedTiles[ageRange], appDiv, ageRange);\n            });\n            ageContainer.appendChild(ageTile);\n        });\n        appDiv.appendChild(ageContainer);\n    }\n    catch (error) {\n        console.error(\"Failed to load activities:\", error);\n    }\n}\n// Initial load\nconst appDiv = document.getElementById('app');\nif (appDiv) {\n    loadActivities(appDiv);\n}\n\n\n//# sourceURL=webpack://budugu/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;