{
  "name": "nutriai-server",
  "version": "0.1.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "import-products": "node import_products.js ./products.csv"
  },
  "dependencies": {
    "express": "^4.18.2",
    "sqlite3": "^5.1.6",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0",
    "cors": "^2.8.5",
    "body-parser": "^1.20.2",
    "multer": "^1.4.5-lts.1",
    "@anthropic-ai/sdk": "^0.32.1",
    "dotenv": "^16.4.5"
  }
}
