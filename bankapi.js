const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 10000;

// API URL
const apiUrl = "https://ecas.bkhicd.com/api/customer/api/BankDetails/Malaysia";

// Endpoint to fetch and return the bank names
app.get("/banks", async (req, res) => {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const data = await response.json();

    // Extract bank names and return as an object
    const bankNames = data.result.map(bank => bank.bankName);

    res.json({ bankNames });
  } catch (error) {
    console.error("Error fetching bank data:", error);
    res.status(500).json({ error: "Failed to fetch bank data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
