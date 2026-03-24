require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  {
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling headphones with 30-hour battery life and crystal-clear sound quality.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    stock: 50,
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for coding and gaming.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
    category: "Electronics",
    stock: 30,
  },
  {
    name: "Minimalist Backpack",
    description: "Water-resistant backpack with laptop compartment. Fits up to 15-inch laptops.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Accessories",
    stock: 40,
  },
  {
    name: "Smart Watch Pro",
    description: "Fitness tracker with heart rate monitor, GPS, and 7-day battery life.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Electronics",
    stock: 25,
  },
  {
    name: "Cotton Crew T-Shirt",
    description: "Premium organic cotton t-shirt. Comfortable fit for everyday wear.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "Clothing",
    stock: 100,
  },
  {
    name: "Running Shoes",
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "Footwear",
    stock: 35,
  },
  {
    name: "Portable Charger 20000mAh",
    description: "Fast-charging power bank with dual USB-C ports. Charge two devices simultaneously.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    category: "Electronics",
    stock: 60,
  },
  {
    name: "Stainless Steel Water Bottle",
    description: "Double-wall insulated bottle. Keeps drinks cold for 24h or hot for 12h.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    category: "Accessories",
    stock: 75,
  },
  {
    name: "Denim Jacket",
    description: "Classic denim jacket with a modern fit. Versatile layering piece for any season.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500",
    category: "Clothing",
    stock: 20,
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with silent clicks and adjustable DPI up to 4000.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    category: "Electronics",
    stock: 45,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Product.deleteMany({});
    console.log("Cleared existing products");

    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);

    await mongoose.disconnect();
    console.log("Done!");
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
}

seed();
