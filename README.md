# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

### Using Docker

You can also spin up the development environment using Docker. First, you have to add the Meilisearch secrets to the `.env` file. You can use the example file for that:

```bash
cp .env.example .env
```

After adding the secrets to the file, simply use Docker Compose to start the server:

```bash
docker compose up
```

The website will be available on [http://localhost:3000](http://localhost:3000)

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
