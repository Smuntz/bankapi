const express = require("express");
const fetch = require("node-fetch"); // Import node-fetch (v2 works with require)

const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT environment variable for deployment

// API URL
const apiUrl = "https://ecas.bkhicd.com/api/customer/api/BankDetails/Malaysia";

// Endpoint to fetch and return the bank names
app.get("/banks", async (req, res) => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const data = await response.json();
    const bankNames = data.result.map((bank) => bank.bankName);

    res.json({ bankNames });
  } catch (error) {
    console.error("Error fetching bank data:", error);
    res.status(500).json({ error: "Failed to fetch bank data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
