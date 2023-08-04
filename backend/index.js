const express = require("express");
const app = express();
const port = 3601;

app.get("/api", (req, res) => {
  const input = parseInt(req.query.number);

  if (isNaN(input)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide a valid integer number." });
  }

  let result = "";
  if (input % 5 === 0) {
    result += "L";
  }
  if (input % 7 === 0) {
    result += "R";
  }
  if (result === "") {
    result = input;
  }

  return res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
