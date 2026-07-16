const { PORT } = require("./src/config/env");
const app = require("./src/app");
const pool = require("./src/config/db");

async function startServer() {
  try {
    await pool.connect();
    console.log("Database Connect Sussefully");

    app.listen(PORT, () => {
      console.log("Server running on PORT 3000");
    });
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

startServer();
