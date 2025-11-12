# Nexus Documentation Setup

## Quick Start

1. **Install Mintlify CLI** (if not already installed):

   ```bash
   npm install -g mintlify
   ```

2. **Run the documentation**:

   ```bash
   # From the root of the monorepo
   pnpm docs

   # Or directly from packages/docs
   cd packages/docs
   pnpm dev:direct
   ```

3. **Access the documentation**:
   - Direct access: http://localhost:3002
   - Through frontend (when both are running): http://localhost:3000/docs

## How It Works

The documentation is set up to work in two ways:

1. **Standalone**: Run Mintlify directly on port 3002
2. **Integrated**: Access through the frontend at `/docs` (requires both frontend and docs to be running)

The frontend Next.js app is configured to proxy all `/docs` requests to the Mintlify server.

## Running Both Frontend and Docs

To run both services together:

```bash
# Terminal 1 - Run frontend and backend
pnpm dev

# Terminal 2 - Run docs
pnpm docs
```

Then access the integrated documentation at http://localhost:3000/docs

## Troubleshooting

- If you get a "command not found" error for mintlify, install it globally: `npm i -g mintlify`
- If the port 3002 is already in use, you can change it in the scripts
- Make sure both services are running to access docs through the frontend
