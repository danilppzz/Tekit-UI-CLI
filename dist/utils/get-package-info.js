"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageInfo = getPackageInfo;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
function getPackageInfo() {
    const packageJsonPath = path_1.default.join("package.json");
    return fs_extra_1.default.readJSONSync(packageJsonPath);
}
