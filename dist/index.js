/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ActivityCard.ts":
/*!****************************************!*\
  !*** ./src/components/ActivityCard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityCard: () => (/* binding */ ActivityCard)
/* harmony export */ });
function ActivityCard(activity) {
    return `
        <div class="activity-card">
        <h3>${activity.title}</h3>
        <p class="age-range">Ages: ${activity.ageRange}</p>
        <img src="${activity.imageUrl}" alt="${activity.title}" class="activity-image">
        <button class="button" id="view-details-button-${activity.id}">View Details</button>
        </div>
    `;
}


/***/ }),

/***/ "./src/components/ActivityModal.ts":
/*!*****************************************!*\
  !*** ./src/components/ActivityModal.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityModal: () => (/* binding */ ActivityModal)
/* harmony export */ });
function ActivityModal(activity) {
    return `
        <div id="activity-modal" class="modal">
            <div class="modal-content">
                <span class="close-button">×</span>
                <h2>${activity.title}</h2>
                <p><strong>Age Range:</strong> ${activity.ageRange}</p>
                <p><strong>Time Estimate:</strong> ${activity.timeEstimate}</p>
                <p><strong>Best Time:</strong> ${activity.bestTime}</p>
                <p><strong>Location:</strong> ${activity.suitableLocation}</p>

                ${activity.learningObjectives ? `
                <h3>Learning Objectives:</h3>
                <ul>
                    ${activity.learningObjectives.map(objective => `<li>${objective}</li>`).join('')}
                </ul>
                ` : ''}

                <h3>Materials:</h3>
                <ul>
                    ${activity.materials.map(material => `<li>${material}</li>`).join('')}
                </ul>

                <h3>Instructions:</h3>
                <ol>
                    ${activity.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;
}


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ActivityCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ActivityCard */ "./src/components/ActivityCard.ts");
/* harmony import */ var _components_ActivityModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ActivityModal */ "./src/components/ActivityModal.ts");


// Function to load activities from JSON files
// Function to load activities from JSON files
async function loadActivities() {
    const loadFromFile = (url) => {
        return fetch(url).then(response => response.json()).catch(e => console.log(`Error loading activities ${url} :`, e));
    };
    // Load from individual JSOn files
    return Promise.all([
        loadFromFile('activity_data/bubble-blowing-1.json'),
        loadFromFile('activity_data/counting-game-1.json'),
        loadFromFile('activity_data/finger-painting-1.json'),
        loadFromFile('activity_data/gardening-1.json'),
        loadFromFile('activity_data/nature-walk-1.json'),
        loadFromFile('activity_data/playdough-1.json'),
        loadFromFile('activity_data/puppet-show-1.json'),
        loadFromFile('activity_data/shape-sorter-1.json'),
        loadFromFile('activity_data/story-time-1.json')
    ]).then(activities => activities.filter(activity => activity));
}
// Function to display activities for a selected category
const displayActivities = (activities, appDiv, categoryTitle) => {
    if (!appDiv) {
        console.error("App div not found!");
        return;
    }
    appDiv.innerHTML = '';
    // Create the back to main menu button
    const backButton = document.createElement('button');
    backButton.textContent = 'Back to Main Menu';
    backButton.className = 'back-button';
    backButton.addEventListener('click', () => {
        loadActivityTiles(appDiv); // Pass the appDiv
    });
    // Append the activity container to the appDiv
    if (categoryTitle) {
        const headerContainer = document.createElement('div');
        headerContainer.className = 'activity-header';
        const headerTitle = document.createElement('h2');
        headerTitle.textContent = categoryTitle;
        headerContainer.appendChild(headerTitle);
        headerContainer.appendChild(backButton); // Add the back button in the right place for right formatting
        appDiv.appendChild(headerContainer); // To display the menu
    }
    else {
        appDiv.appendChild(backButton);
    }
    const activityContainer = document.createElement('div');
    activityContainer.className = 'activity-container';
    activities.forEach(activity => {
        activityContainer.innerHTML += (0,_components_ActivityCard__WEBPACK_IMPORTED_MODULE_0__.ActivityCard)(activity);
    });
    appDiv.appendChild(activityContainer);
    // Modal rendering loop
    activities.forEach(activity => {
        const button = document.getElementById(`view-details-button-${activity.id}`);
        if (button) {
            button.addEventListener('click', () => {
                const modalDiv = document.createElement('div');
                modalDiv.innerHTML = (0,_components_ActivityModal__WEBPACK_IMPORTED_MODULE_1__.ActivityModal)(activity);
                document.body.appendChild(modalDiv);
                const modal = document.getElementById('activity-modal');
                if (modal) {
                    modal.style.display = "block";
                    const closeButton = document.querySelector('.close-button');
                    if (closeButton) {
                        closeButton.addEventListener('click', () => {
                            modal.style.display = "none";
                            document.body.removeChild(modalDiv);
                        });
                    }
                    else {
                        console.error("Close button not found in modal!");
                    }
                }
                else {
                    console.error("Modal element not found!");
                }
            });
        }
        else {
            console.error("View details button not found!");
        }
    });
};
// Render the code
async function loadActivityTiles(appDiv) {
    // Error handling for the app div is not available
    if (!appDiv) {
        console.error("App div not found!");
        return;
    }
    // Clean the div for new categories
    appDiv.innerHTML = '';
    // Load activities data.
    try {
        // Load activities from all files and run it here
        const activities = await loadActivities();
        // Main Category Tiles
        const categoryTiles = {
            "Indoor Activities": activities.filter(activity => activity.suitableLocation.toLowerCase() === 'indoor'),
            "Outdoor Activities": activities.filter(activity => activity.suitableLocation.toLowerCase() === 'outdoor'),
        };
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';
        Object.keys(categoryTiles).forEach(category => {
            const categoryTile = document.createElement('div');
            categoryTile.className = 'category-tile';
            categoryTile.textContent = category;
            categoryTile.addEventListener('click', () => {
                // To avoid duplicating what's going on, reuse with category and appDiv
                displayActivities(categoryTiles[category], appDiv, category);
            });
            categoryContainer.appendChild(categoryTile);
        });
        appDiv.appendChild(categoryContainer); // Append the container to the #app div
        const ageBasedTiles = {
            "Toddler Activities (18 months - 3 years)": activities.filter(activity => {
                const [min, max] = activity.ageRange.split('-').map(Number);
                return min >= 1.5 && max <= 3;
            }),
            "Preschool Activities (3-5 years)": activities.filter(activity => {
                const [min, max] = activity.ageRange.split('-').map(Number);
                return min >= 3 && max <= 5;
            }),
            "Kindergarten Activities (5-6 years)": activities.filter(activity => {
                const [min, max] = activity.ageRange.split('-').map(Number);
                return min >= 5 && max <= 6;
            })
        };
        // Age based Category
        const ageContainer = document.createElement('div');
        ageContainer.className = 'age-container';
        Object.keys(ageBasedTiles).forEach(ageRange => {
            const ageTile = document.createElement('div');
            ageTile.className = 'age-tile';
            ageTile.textContent = ageRange;
            ageTile.addEventListener('click', () => {
                displayActivities(ageBasedTiles[ageRange], appDiv, ageRange);
            });
            ageContainer.appendChild(ageTile);
        });
        appDiv.appendChild(ageContainer);
    }
    catch (error) {
        console.error("Failed to load activities:", error);
    }
}
// Start function to load
const appDiv = document.getElementById('app');
if (appDiv) {
    loadActivityTiles(appDiv);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztBQUNILENBQUM7QUFFRCx5QkFBeUI7QUFDekIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ1gsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZHVndS8uL3NyYy9jb21wb25lbnRzL0FjdGl2aXR5Q2FyZC50cyIsIndlYnBhY2s6Ly9idWR1Z3UvLi9zcmMvY29tcG9uZW50cy9BY3Rpdml0eU1vZGFsLnRzIiwid2VicGFjazovL2J1ZHVndS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9idWR1Z3Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2J1ZHVndS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2J1ZHVndS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J1ZHVndS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpdml0eSB9IGZyb20gJy4uL21vZGVscy9hY3Rpdml0eSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBBY3Rpdml0eUNhcmQoYWN0aXZpdHk6IEFjdGl2aXR5KTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aXZpdHktY2FyZFwiPlxuICAgICAgICA8aDM+JHthY3Rpdml0eS50aXRsZX08L2gzPlxuICAgICAgICA8cCBjbGFzcz1cImFnZS1yYW5nZVwiPkFnZXM6ICR7YWN0aXZpdHkuYWdlUmFuZ2V9PC9wPlxuICAgICAgICA8aW1nIHNyYz1cIiR7YWN0aXZpdHkuaW1hZ2VVcmx9XCIgYWx0PVwiJHthY3Rpdml0eS50aXRsZX1cIiBjbGFzcz1cImFjdGl2aXR5LWltYWdlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cInZpZXctZGV0YWlscy1idXR0b24tJHthY3Rpdml0eS5pZH1cIj5WaWV3IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbn0iLCJpbXBvcnQgeyBBY3Rpdml0eSB9IGZyb20gJy4uL21vZGVscy9hY3Rpdml0eSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBBY3Rpdml0eU1vZGFsKGFjdGl2aXR5OiBBY3Rpdml0eSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBpZD1cImFjdGl2aXR5LW1vZGFsXCIgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWJ1dHRvblwiPsOXPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMj4ke2FjdGl2aXR5LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5BZ2UgUmFuZ2U6PC9zdHJvbmc+ICR7YWN0aXZpdHkuYWdlUmFuZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+VGltZSBFc3RpbWF0ZTo8L3N0cm9uZz4gJHthY3Rpdml0eS50aW1lRXN0aW1hdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+QmVzdCBUaW1lOjwvc3Ryb25nPiAke2FjdGl2aXR5LmJlc3RUaW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkxvY2F0aW9uOjwvc3Ryb25nPiAke2FjdGl2aXR5LnN1aXRhYmxlTG9jYXRpb259PC9wPlxuXG4gICAgICAgICAgICAgICAgJHthY3Rpdml0eS5sZWFybmluZ09iamVjdGl2ZXMgPyBgXG4gICAgICAgICAgICAgICAgPGgzPkxlYXJuaW5nIE9iamVjdGl2ZXM6PC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICR7YWN0aXZpdHkubGVhcm5pbmdPYmplY3RpdmVzLm1hcChvYmplY3RpdmUgPT4gYDxsaT4ke29iamVjdGl2ZX08L2xpPmApLmpvaW4oJycpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgYCA6ICcnfVxuXG4gICAgICAgICAgICAgICAgPGgzPk1hdGVyaWFsczo8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgJHthY3Rpdml0eS5tYXRlcmlhbHMubWFwKG1hdGVyaWFsID0+IGA8bGk+JHttYXRlcmlhbH08L2xpPmApLmpvaW4oJycpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8aDM+SW5zdHJ1Y3Rpb25zOjwvaDM+XG4gICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAke2FjdGl2aXR5Lmluc3RydWN0aW9ucy5tYXAoaW5zdHJ1Y3Rpb24gPT4gYDxsaT4ke2luc3RydWN0aW9ufTwvbGk+YCkuam9pbignJyl9XG4gICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQWN0aXZpdHlDYXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL0FjdGl2aXR5Q2FyZCc7XG5pbXBvcnQgeyBBY3Rpdml0eU1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL0FjdGl2aXR5TW9kYWwnO1xuaW1wb3J0IHsgQWN0aXZpdHkgfSBmcm9tICcuL21vZGVscy9hY3Rpdml0eSc7XG5cbi8vIEZ1bmN0aW9uIHRvIGxvYWQgYWN0aXZpdGllcyBmcm9tIEpTT04gZmlsZXNcbi8vIEZ1bmN0aW9uIHRvIGxvYWQgYWN0aXZpdGllcyBmcm9tIEpTT04gZmlsZXNcbmFzeW5jIGZ1bmN0aW9uIGxvYWRBY3Rpdml0aWVzKCk6IFByb21pc2U8QWN0aXZpdHlbXT4ge1xuICAgIGNvbnN0IGxvYWRGcm9tRmlsZSA9ICh1cmwgOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLmNhdGNoKGUgPT4gY29uc29sZS5sb2coYEVycm9yIGxvYWRpbmcgYWN0aXZpdGllcyAke3VybH0gOmAgLCBlKSlcbiAgICB9XG4gICAgLy8gTG9hZCBmcm9tIGluZGl2aWR1YWwgSlNPbiBmaWxlc1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgIGxvYWRGcm9tRmlsZSgnYWN0aXZpdHlfZGF0YS9idWJibGUtYmxvd2luZy0xLmpzb24nKSxcbiAgICAgICAgbG9hZEZyb21GaWxlKCdhY3Rpdml0eV9kYXRhL2NvdW50aW5nLWdhbWUtMS5qc29uJyksXG4gICAgICAgIGxvYWRGcm9tRmlsZSgnYWN0aXZpdHlfZGF0YS9maW5nZXItcGFpbnRpbmctMS5qc29uJyksXG4gICAgICAgIGxvYWRGcm9tRmlsZSgnYWN0aXZpdHlfZGF0YS9nYXJkZW5pbmctMS5qc29uJyksXG4gICAgICAgIGxvYWRGcm9tRmlsZSgnYWN0aXZpdHlfZGF0YS9uYXR1cmUtd2Fsay0xLmpzb24nKSxcbiAgICAgICAgbG9hZEZyb21GaWxlKCdhY3Rpdml0eV9kYXRhL3BsYXlkb3VnaC0xLmpzb24nKSxcbiAgICAgICAgbG9hZEZyb21GaWxlKCdhY3Rpdml0eV9kYXRhL3B1cHBldC1zaG93LTEuanNvbicpLFxuICAgICAgICBsb2FkRnJvbUZpbGUoJ2FjdGl2aXR5X2RhdGEvc2hhcGUtc29ydGVyLTEuanNvbicpLFxuICAgICAgICBsb2FkRnJvbUZpbGUoJ2FjdGl2aXR5X2RhdGEvc3RvcnktdGltZS0xLmpzb24nKVxuICAgIF0pLnRoZW4oYWN0aXZpdGllcyA9PiBhY3Rpdml0aWVzLmZpbHRlcihhY3Rpdml0eSA9PiBhY3Rpdml0eSkpXG59XG5cbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgYWN0aXZpdGllcyBmb3IgYSBzZWxlY3RlZCBjYXRlZ29yeVxuY29uc3QgZGlzcGxheUFjdGl2aXRpZXMgPSAoYWN0aXZpdGllcyA6IEFjdGl2aXR5W10sYXBwRGl2IDogSFRNTEVsZW1lbnQsY2F0ZWdvcnlUaXRsZSA6IHN0cmluZykgPT4ge1xuICBpZiAoIWFwcERpdikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBcHAgZGl2IG5vdCBmb3VuZCFcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFwcERpdi5pbm5lckhUTUwgPSAnJztcblxuICAvLyBDcmVhdGUgdGhlIGJhY2sgdG8gbWFpbiBtZW51IGJ1dHRvblxuICBjb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJhY2tCdXR0b24udGV4dENvbnRlbnQgPSAnQmFjayB0byBNYWluIE1lbnUnO1xuICBiYWNrQnV0dG9uLmNsYXNzTmFtZSA9ICdiYWNrLWJ1dHRvbic7XG4gIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9hZEFjdGl2aXR5VGlsZXMoYXBwRGl2KTsgLy8gUGFzcyB0aGUgYXBwRGl2XG4gIH0pO1xuXG4gIC8vIEFwcGVuZCB0aGUgYWN0aXZpdHkgY29udGFpbmVyIHRvIHRoZSBhcHBEaXZcbiAgaWYgKGNhdGVnb3J5VGl0bGUpIHtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NOYW1lID0gJ2FjdGl2aXR5LWhlYWRlcic7XG5cbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeVRpdGxlO1xuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tCdXR0b24pOyAvLyBBZGQgdGhlIGJhY2sgYnV0dG9uIGluIHRoZSByaWdodCBwbGFjZSBmb3IgcmlnaHQgZm9ybWF0dGluZ1xuICAgIGFwcERpdi5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpOyAvLyBUbyBkaXNwbGF5IHRoZSBtZW51XG4gIH0gZWxzZSB7XG4gICAgYXBwRGl2LmFwcGVuZENoaWxkKGJhY2tCdXR0b24pXG4gIH1cblxuICBjb25zdCBhY3Rpdml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY3Rpdml0eUNvbnRhaW5lci5jbGFzc05hbWUgPSAnYWN0aXZpdHktY29udGFpbmVyJztcblxuICBhY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xuICAgIGFjdGl2aXR5Q29udGFpbmVyLmlubmVySFRNTCArPSBBY3Rpdml0eUNhcmQoYWN0aXZpdHkpO1xuICB9KTtcblxuICBhcHBEaXYuYXBwZW5kQ2hpbGQoYWN0aXZpdHlDb250YWluZXIpO1xuICAvLyBNb2RhbCByZW5kZXJpbmcgbG9vcFxuICBhY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB2aWV3LWRldGFpbHMtYnV0dG9uLSR7YWN0aXZpdHkuaWR9YCk7XG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbERpdi5pbm5lckhUTUwgPSBBY3Rpdml0eU1vZGFsKGFjdGl2aXR5KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbERpdik7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdHktbW9kYWwnKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpO1xuICAgICAgICAgIGlmIChjbG9zZUJ1dHRvbikge1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbERpdik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNsb3NlIGJ1dHRvbiBub3QgZm91bmQgaW4gbW9kYWwhXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTW9kYWwgZWxlbWVudCBub3QgZm91bmQhXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIlZpZXcgZGV0YWlscyBidXR0b24gbm90IGZvdW5kIVwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBSZW5kZXIgdGhlIGNvZGVcbmFzeW5jIGZ1bmN0aW9uIGxvYWRBY3Rpdml0eVRpbGVzKGFwcERpdjogSFRNTEVsZW1lbnQpIHtcbiAgLy8gRXJyb3IgaGFuZGxpbmcgZm9yIHRoZSBhcHAgZGl2IGlzIG5vdCBhdmFpbGFibGVcbiAgaWYgKCFhcHBEaXYpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQXBwIGRpdiBub3QgZm91bmQhXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENsZWFuIHRoZSBkaXYgZm9yIG5ldyBjYXRlZ29yaWVzXG4gIGFwcERpdi5pbm5lckhUTUwgPSAnJztcblxuICAvLyBMb2FkIGFjdGl2aXRpZXMgZGF0YS5cbiAgdHJ5IHtcbiAgICAvLyBMb2FkIGFjdGl2aXRpZXMgZnJvbSBhbGwgZmlsZXMgYW5kIHJ1biBpdCBoZXJlXG4gICAgY29uc3QgYWN0aXZpdGllcyA9IGF3YWl0IGxvYWRBY3Rpdml0aWVzKClcblxuICAgIC8vIE1haW4gQ2F0ZWdvcnkgVGlsZXNcbiAgICBjb25zdCBjYXRlZ29yeVRpbGVzOiB7W2tleTogc3RyaW5nXTogQWN0aXZpdHlbXX0gPSB7XG4gICAgICBcIkluZG9vciBBY3Rpdml0aWVzXCI6IGFjdGl2aXRpZXMuZmlsdGVyKGFjdGl2aXR5ID0+IGFjdGl2aXR5LnN1aXRhYmxlTG9jYXRpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2luZG9vcicpLFxuICAgICAgXCJPdXRkb29yIEFjdGl2aXRpZXNcIjogYWN0aXZpdGllcy5maWx0ZXIoYWN0aXZpdHkgPT4gYWN0aXZpdHkuc3VpdGFibGVMb2NhdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnb3V0ZG9vcicpLFxuICAgIH07XG5cbiAgICBjb25zdCBjYXRlZ29yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhdGVnb3J5Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjYXRlZ29yeS1jb250YWluZXInO1xuXG4gICAgT2JqZWN0LmtleXMoY2F0ZWdvcnlUaWxlcykuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeVRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhdGVnb3J5VGlsZS5jbGFzc05hbWUgPSAnY2F0ZWdvcnktdGlsZSc7XG4gICAgICBjYXRlZ29yeVRpbGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICAgIGNhdGVnb3J5VGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gVG8gYXZvaWQgZHVwbGljYXRpbmcgd2hhdCdzIGdvaW5nIG9uLCByZXVzZSB3aXRoIGNhdGVnb3J5IGFuZCBhcHBEaXZcbiAgICAgICAgZGlzcGxheUFjdGl2aXRpZXMoY2F0ZWdvcnlUaWxlc1tjYXRlZ29yeV0sIGFwcERpdiwgY2F0ZWdvcnkpO1xuICAgICAgfSk7XG4gICAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeVRpbGUpO1xuICAgIH0pO1xuXG4gICAgYXBwRGl2LmFwcGVuZENoaWxkKGNhdGVnb3J5Q29udGFpbmVyKTsgLy8gQXBwZW5kIHRoZSBjb250YWluZXIgdG8gdGhlICNhcHAgZGl2XG4gICAgY29uc3QgYWdlQmFzZWRUaWxlczoge1trZXk6IHN0cmluZ106IEFjdGl2aXR5W119ID0ge1xuICAgICAgXCJUb2RkbGVyIEFjdGl2aXRpZXMgKDE4IG1vbnRocyAtIDMgeWVhcnMpXCI6IGFjdGl2aXRpZXMuZmlsdGVyKGFjdGl2aXR5ID0+IHtcbiAgICAgICAgY29uc3QgW21pbiwgbWF4XSA9IGFjdGl2aXR5LmFnZVJhbmdlLnNwbGl0KCctJykubWFwKE51bWJlcik7XG4gICAgICAgIHJldHVybiBtaW4gPj0gMS41ICYmIG1heCA8PSAzO1xuICAgICAgfSksXG4gICAgICBcIlByZXNjaG9vbCBBY3Rpdml0aWVzICgzLTUgeWVhcnMpXCI6IGFjdGl2aXRpZXMuZmlsdGVyKGFjdGl2aXR5ID0+IHtcbiAgICAgICAgY29uc3QgW21pbiwgbWF4XSA9IGFjdGl2aXR5LmFnZVJhbmdlLnNwbGl0KCctJykubWFwKE51bWJlcik7XG4gICAgICAgIHJldHVybiBtaW4gPj0gMyAmJiBtYXggPD0gNTtcbiAgICAgIH0pLFxuICAgICAgXCJLaW5kZXJnYXJ0ZW4gQWN0aXZpdGllcyAoNS02IHllYXJzKVwiOiBhY3Rpdml0aWVzLmZpbHRlcihhY3Rpdml0eSA9PiB7XG4gICAgICAgIGNvbnN0IFttaW4sIG1heF0gPSBhY3Rpdml0eS5hZ2VSYW5nZS5zcGxpdCgnLScpLm1hcChOdW1iZXIpO1xuICAgICAgICByZXR1cm4gbWluID49IDUgJiYgbWF4IDw9IDY7XG4gICAgICB9KVxuICAgIH07XG5cbiAgICAvLyBBZ2UgYmFzZWQgQ2F0ZWdvcnlcbiAgICBjb25zdCBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZ2VDb250YWluZXIuY2xhc3NOYW1lID0gJ2FnZS1jb250YWluZXInO1xuXG4gICAgT2JqZWN0LmtleXMoYWdlQmFzZWRUaWxlcykuZm9yRWFjaChhZ2VSYW5nZSA9PiB7XG4gICAgICBjb25zdCBhZ2VUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBhZ2VUaWxlLmNsYXNzTmFtZSA9ICdhZ2UtdGlsZSc7XG4gICAgICBhZ2VUaWxlLnRleHRDb250ZW50ID0gYWdlUmFuZ2U7XG4gICAgICBhZ2VUaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5QWN0aXZpdGllcyhhZ2VCYXNlZFRpbGVzW2FnZVJhbmdlXSwgYXBwRGl2LCBhZ2VSYW5nZSk7XG4gICAgICB9KTtcbiAgICAgIGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZ2VUaWxlKTtcbiAgICB9KTtcbiAgICBhcHBEaXYuYXBwZW5kQ2hpbGQoYWdlQ29udGFpbmVyKTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhY3Rpdml0aWVzOlwiLCBlcnJvcik7XG4gIH1cbn1cblxuLy8gU3RhcnQgZnVuY3Rpb24gdG8gbG9hZFxuY29uc3QgYXBwRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuaWYgKGFwcERpdikge1xuICBsb2FkQWN0aXZpdHlUaWxlcyhhcHBEaXYpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==