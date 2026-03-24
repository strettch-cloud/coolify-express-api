# ShopEase API

Express.js REST API for the ShopEase ecommerce application. Uses MongoDB for data storage.

Part of the **"Deploy a Full-Stack App on Strettch Cloud with Coolify"** tutorial.

## Quick Start

```bash
# Clone the repo
git clone https://github.com/strettch/coolify-express-api.git
cd coolify-express-api

# Install dependencies
npm install

# Copy env file and configure
cp .env.example .env

# Seed sample products (requires MongoDB running)
npm run seed

# Start the server
npm run dev
```

## API Endpoints

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT token
- `GET /api/auth/me` — Get current user (requires auth)

### Products
- `GET /api/products` — List all products (optional `?category=` filter)
- `GET /api/products/:id` — Get a single product

### Orders
- `POST /api/orders` — Create an order (requires auth)
- `GET /api/orders` — Get user's orders (requires auth)

### Health
- `GET /api/health` — Health check

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/shopease` |
| `JWT_SECRET` | Secret key for JWT tokens | — |
| `PORT` | Server port | `5000` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:3000` |

## Deploy with Coolify

See the full tutorial: [Deploy a Full-Stack App on Strettch Cloud with Coolify](https://github.com/strettch/coolify-nextjs-store/blob/main/TUTORIAL.md)

## License

MIT
