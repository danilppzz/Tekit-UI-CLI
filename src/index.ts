#!/usr/bin/env node

import { add } from "@/src/commands/add";
import { Command } from "commander";
import { getPackageInfo } from "@/src/utils/get-package-info";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("tekit-ui")
    .description("Add components and dependencies to your project")
    .version(packageInfo.version || "1.0.0", "-v, --version", "display the version number");

  program.addCommand(add);

  program.parse();
}

main();
