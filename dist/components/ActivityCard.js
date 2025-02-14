export function ActivityCard(activity) {
    return `
        <div class="activity-card">
        <h3>${activity.title}</h3>
        <p class="age-range">Ages: ${activity.ageRange}</p>
        <img src="${activity.imageUrl}" alt="${activity.title}" class="activity-image">
        <button class="button" id="view-details-button-${activity.id}">View Details</button>
        </div>
    `;
}
//# sourceMappingURL=ActivityCard.js.map