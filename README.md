<h1 align="center">Learning Postgres</h1>

<p align="center">
  <img
    alt="GitHub top language"
    src="https://img.shields.io/github/languages/top/kauefraga/learning-postgres.svg"
  />
  <img
    alt="Repository size"
    src="https://img.shields.io/github/repo-size/kauefraga/learning-postgres.svg"
  />
  <a href="https://github.com/kauefraga/learning-postgres/commits/main">
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/kauefraga/learning-postgres.svg"
    />
  </a>
  <img
    alt="GitHub LICENSE"
    src="https://img.shields.io/github/license/kauefraga/learning-postgres.svg"
  />
</p>

<h4 align="center">Trying out SQL using postgres "bare metal" (without orm) </h4>

## 📝 Table of contents
- What do you need to run it
  - [nodejs](https://nodejs.org/en) (prefer lts version)
    - [pnpm](https://pnpm.io)
  - [docker](https://www.docker.com)
- How to download
- How to set up postgres (with docker)

## ⬇️ How to download and run

```bash
git clone https://github.com/kauefraga/learning-postgres.git
cd learning-postgres
npm install
npm run build
npm run start

# if you want to develop
npm run dev
```

## 🐳 How to set up postgres (docker image -> bitnami/postgres)
```sh
# if you get an error try sudo mode
docker run --name postgresql bitnami/postgresql:latest
docker-compose up -d
```

source: https://hub.docker.com/r/bitnami/postgresql

Or downloading with yarn? `yarn && yarn build && yarn start`
<br/>
Sincerely, i prefer pnpm so: `pnpm i && pnpm build && pnpm start`

## 💻 Technologies

- 🐳 [Docker](https://www.docker.com)
  > Use virtualization/containerize to turn your "work on my machine" into "our machine"
- 🤫 [Dotenv](https://npmjs.com/package/dotenv)
  > We must hide our secret keys, with dotenv we can load env variables into `process.env` more easily
- 💄 Code ruling with [Eslint](https://eslint.org)
  - https://www.npmjs.com/package/eslint-config-airbnb-base
  - https://www.npmjs.com/package/eslint-config-airbnb-typescript
- 🐘 Database [Postgres](https://www.npmjs.com/package/postgres)
  > PostgreSQL is a relational database. It is the driver implementation for nodejs
- ⚗️ Running tests on [Vitest](https://vitest.dev)
  > Implements Jest but with its own ESbuider (out of box typescript, esmodules...)
- 🧑‍💻 Developed on [Typescript](https://typescriptlang.org) + [TS-Node-Dev](https://npmjs.com/package/ts-node-dev)
  > Improve dev experience by adding type safety

## 🗃️ Project tree view

```bash
.
├─ src
│  ├─ entities
│  ├─ infra
│    ├─ migrations
│    ├─ db.ts
│    ├─ run-migrations.ts
│  ├─ main.ts
├─ .eslintrc.json
├─ .env
├─ docker-compose.yaml
├─ vitest.config.ts
└─ tsconfig.json
```

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/learning-postgres/blob/main/LICENSE) for more information.

---

<div align="center">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
