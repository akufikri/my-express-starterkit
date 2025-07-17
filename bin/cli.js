#!/usr/bin/env node
import inquirer from "inquirer";
import { execa } from "execa"; // ✅ fixed
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesDir = path.resolve(__dirname, "../templates");

(async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Choose your language:",
      choices: ["TypeScript", "JavaScript"]
    },
    {
      type: "list",
      name: "runtime",
      message: "Choose your runtime:",
      choices: ["bun", "npm", "yarn"]
    },
    {
      type: "confirm",
      name: "usePrisma",
      message: "Do you want to use Prisma?"
    },
    {
      type: "list",
      name: "database",
      message: "Choose your database:",
      choices: ["MongoDB", "Supabase", "Other"]
    },
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      default: "my-app"
    }
  ]);

  const { language, runtime, usePrisma, database, projectName } = answers;

  const templateName = [
    language === "TypeScript" ? "ts" : "js",
    runtime,
    usePrisma ? "prisma" : "noprisma",
    database.toLowerCase()
  ].join("-");

  const templatePath = path.join(templatesDir, templateName);
  const targetPath = path.resolve(process.cwd(), projectName);

  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template "${templateName}" not found!`);
    process.exit(1);
  }

  fs.cpSync(templatePath, targetPath, { recursive: true });
  console.log(`✅ Project created at ${targetPath}`);

  try {
    console.log(`📦 Installing dependencies using ${runtime}...`);
    if (runtime === "bun") {
      await execa("bun", ["install"], { cwd: targetPath, stdio: "inherit" });
    } else {
      await execa(runtime, ["install"], { cwd: targetPath, stdio: "inherit" });
    }
  } catch (err) {
    console.error("❌ Failed to install dependencies:", err.message);
  }

  if (usePrisma) {
    try {
      console.log(`⚙️ Running Prisma generate...`);
      await execa(runtime === "bun" ? "bunx" : "npx", ["prisma", "generate"], {
        cwd: targetPath,
        stdio: "inherit"
      });
    } catch (err) {
      console.error("⚠️ Prisma generate failed:", err.message);
    }
  }

  console.log(`🎉 All done! Your app is ready.`);
})();
