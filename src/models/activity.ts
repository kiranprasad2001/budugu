export interface Activity {
    id: string;
    category: string;
    subcategory?: string;
    title: string;
    ageRange: string;  // e.g., "2-4", "3-5", "5-6"
    materials: string[];
    instructions: string[];
    imageUrl?: string;
    timeEstimate: string;
    bestTime: string;
    suitableLocation: string;
    learningObjectives?: string[];
}