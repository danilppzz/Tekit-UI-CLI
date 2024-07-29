"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const commander_1 = require("commander");
exports.add = new commander_1.Command('add');
exports.add
    .argument('<component>', 'Name of the component to add')
    .description('Add a component from the GitHub repository')
    .action(async (component) => {
    try {
        const baseUrl = 'https://raw.githubusercontent.com/danilppzz/Hash-UI/main/components/';
        const fileUrl = `${baseUrl}${component}.tsx`;
        const outputPath = path_1.default.join(process.cwd(), 'src/components/ui', `${component}.tsx`);
        // Create the output directory if it doesn't exist
        fs_1.default.mkdirSync(path_1.default.dirname(outputPath), { recursive: true });
        // Download the file
        console.log(`Downloading ${fileUrl}...`);
        const response = await axios_1.default.get(fileUrl);
        // Write the file to the filesystem
        fs_1.default.writeFileSync(outputPath, response.data);
        console.log(`Component ${component} added successfully to ${outputPath}`);
    }
    catch (error) {
        console.error(`Failed to download component ${component}:`, error.message);
    }
});
