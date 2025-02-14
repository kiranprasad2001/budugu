import { Activity } from '../models/activity';

export function ActivityModal(activity: Activity): string {
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