const express = require("express");
const cors = require("cors");
const path = require("path");
const { getSystemStats } = require("./system");

const app = express();
app.use(cors());

// 🔥 GLOBAL STATE
let state = {
  stats: {},
  lastUpdate: null
};

// 🔁 STATE GÜNCELLE
function updateState() {
  state.stats = getSystemStats();
  state.lastUpdate = new Date().toISOString();
  console.log("State updated");
}

// ilk yükleme
updateState();

// her 5 saniyede güncelle
setInterval(updateState, 5000);

// 🔹 API
app.get("/api/state", (req, res) => {
  res.json(state);
});

// 🔹 FRONTEND SERVE
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`System Monitor running on ${PORT}`)
);

