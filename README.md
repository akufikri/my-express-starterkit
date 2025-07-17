# 🧰 My StarterKit – Express Backend Generator

A customizable CLI tool to scaffold your backend Express.js project with options for:
- ✅ JavaScript or TypeScript
- ⚙️ Runtime: Bun, NPM, or Yarn
- 📦 Prisma ORM (optional)
- 🗄️ Database: MongoDB, Supabase, or others

---

## 🚀 Quick Start

### 1. Install globally via NPM

```bash
npm install -g my-starterkit
```

### 2. Create a new project

```bash
my-starterkit
```

You will be prompted to choose:
- Project language (TypeScript / JavaScript)
- Runtime (bun / npm / yarn)
- Use Prisma or not
- Database (MongoDB / Supabase / Other)
- Project name

### 3. Go to your project folder

```bash
cd your-project-name
```

### 4. Run your project

```bash
bun dev   # or npm run dev / yarn dev depending on your chosen runtime
```

## 📁 Project Structure Example

```
your-project-name/
├── src/
│   └── index.ts / index.js
├── prisma/
│   └── schema.prisma (if using Prisma)
├── package.json
├── tsconfig.json (if using TypeScript)
├── bunfig.toml (if using Bun)
└── .env
```

## 🛠 Features

- Choose between TypeScript or JavaScript
- Support for Bun, NPM, or Yarn
- Optional Prisma integration with preconfigured schema.prisma
- MongoDB or Supabase ready
- Clean folder structure and developer-friendly setup

## 🧪 Example Usage

```bash
my-starterkit
# ? Choose your language: TypeScript
# ? Choose your runtime: bun
# ? Do you want to use Prisma? Yes
# ? Choose your database: MongoDB
# ? Enter your project name: my-api
```

Done! Now just:

```bash
cd my-api
bun dev
```

## 📦 Publishing to NPM (for maintainers)

If you're maintaining this starterkit, update version in package.json and publish:

```bash
npm publish --access public
```

## 🙌 Contributing

Feel free to open issues or submit pull requests to improve this starterkit!

---

**Happy coding! 🚀**