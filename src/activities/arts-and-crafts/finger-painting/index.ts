import { Activity } from '../../../models/activity';
import activityData from './data.json';

const activity: Activity = activityData as Activity;

export function getFingerPaintingActivity(): Activity {
    return activity;
}