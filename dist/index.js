#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./commands/add");
const commander_1 = require("commander");
const get_package_info_1 = require("./utils/get-package-info");
process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));
async function main() {
    const packageInfo = (0, get_package_info_1.getPackageInfo)();
    const program = new commander_1.Command()
        .name('tekit-ui')
        .description('Add components and dependencies to your project')
        .version(packageInfo.version || '1.0.0', '-v, --version', 'display the version number');
    program.addCommand(add_1.add);
    program.parse();
}
main();
