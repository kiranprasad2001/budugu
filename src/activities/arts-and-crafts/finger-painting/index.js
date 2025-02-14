"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFingerPaintingActivity = getFingerPaintingActivity;
const data_json_1 = __importDefault(require("./data.json"));
const activity = data_json_1.default;
function getFingerPaintingActivity() {
    return activity;
}
