import { ActivityCard } from './components/ActivityCard';
import { ActivityModal } from './components/ActivityModal';
import { Activity } from './models/activity';

// Function to load activities from JSON files
// Function to load activities from JSON files
async function loadActivities(): Promise<Activity[]> {
    const loadFromFile = (url : string) => {
        return fetch(url).then(response => response.json()).catch(e => console.log(`Error loading activities ${url} :` , e))
    }
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
    ]).then(activities => activities.filter(activity => activity))
}

// Function to display activities for a selected category
const displayActivities = (activities : Activity[],appDiv : HTMLElement,categoryTitle : string) => {
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
  } else {
    appDiv.appendChild(backButton)
  }

  const activityContainer = document.createElement('div');
  activityContainer.className = 'activity-container';

  activities.forEach(activity => {
    activityContainer.innerHTML += ActivityCard(activity);
  });

  appDiv.appendChild(activityContainer);
  // Modal rendering loop
  activities.forEach(activity => {
    const button = document.getElementById(`view-details-button-${activity.id}`);
    if (button) {
      button.addEventListener('click', () => {
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = ActivityModal(activity);
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
          } else {
            console.error("Close button not found in modal!");
          }
        } else {
          console.error("Modal element not found!");
        }
      });
    } else {
      console.error("View details button not found!");
    }
  });
}

// Render the code
async function loadActivityTiles(appDiv: HTMLElement) {
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
    const activities = await loadActivities()

    // Main Category Tiles
    const categoryTiles: {[key: string]: Activity[]} = {
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
    const ageBasedTiles: {[key: string]: Activity[]} = {
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

  } catch (error) {
    console.error("Failed to load activities:", error);
  }
}

// Start function to load
const appDiv = document.getElementById('app');
if (appDiv) {
  loadActivityTiles(appDiv);
}