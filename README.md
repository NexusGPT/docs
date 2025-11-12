# Nexus API Documentation

This package contains the Mintlify-powered documentation for Nexus API.

## Development

To run the documentation locally:

```bash
# From the root of the monorepo
pnpm docs

# Or from this directory
pnpm dev
```

The documentation will be available at:

- Direct access: http://localhost:3002
- Through frontend proxy: http://localhost:3000/docs

## Installation

Install dependencies (Mintlify is included as a dev dependency):

```bash
pnpm install
```

## Deployment

The documentation can be deployed separately or served through the main application.

### Option 1: Serve through Next.js (Current Setup)

The frontend Next.js app is configured to proxy `/docs` routes to the Mintlify server running on port 3002.

### Option 2: Deploy to Mintlify Cloud

1. Connect your repository to Mintlify Dashboard
2. Set the docs directory to `packages/docs`
3. Deploy automatically on push

## Structure

- `/api-reference` - API endpoint documentation
- `/essentials` - Core concepts and guides
- `/ai-tools` - AI tools documentation
- `docs.json` - Mintlify configuration

## Adding New Pages

1. Create a new `.mdx` file in the appropriate directory
2. Add the page to the navigation in `docs.json`
3. Follow the Mintlify documentation format

## Troubleshooting

- If your dev environment isn't running: Run `mintlify update` to ensure you have the most recent version of the CLI.
- If a page loads as a 404: Make sure you are running in a folder with a valid `docs.json`.

## Resources

- [Mintlify Documentation](https://mintlify.com/docs)
- [MDX Syntax Guide](https://mintlify.com/docs/content/text)
- [Mintlify Community](https://mintlify.com/community)
