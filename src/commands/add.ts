import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { Command } from 'commander';

export const add = new Command('add');

add
  .argument('<component>', 'Name of the component to add')
  .description('Add a component from the GitHub repository')
  .action(async (component: string) => {
    try {
      const baseUrl = 'https://raw.githubusercontent.com/danilppzz/Tekit-UI/main/components/';
      const fileUrl = `${baseUrl}${component}.tsx`;
      const outputPath = path.join(process.cwd(), 'src/components/ui', `${component}.tsx`);

      // Create the output directory if it doesn't exist
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });

      // Download the file
      console.log(`Downloading ${fileUrl}...`);
      const response = await axios.get(fileUrl);

      // Write the file to the filesystem
      fs.writeFileSync(outputPath, response.data);
      console.log(`Component ${component} added successfully to ${outputPath}`);
    } catch (error) {
      console.error(`Failed to download component ${component}:`, (error as Error).message);
    }
  });
