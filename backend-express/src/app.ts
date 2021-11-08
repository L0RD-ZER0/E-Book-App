import express from "express";
import { angular_path } from "./frontend/angular";
import { react_path } from "./frontend/react";
import frontend from "./frontend/main";

const app = express();
const port = process.env.EXPRESS_PORT || 8030;
const ipaddress = process.env.EXPRESS_IP || "localhost"

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.hostname}${req.originalUrl}`);
    next();
});

app.use("/", frontend);
app.use("/angular", express.static(angular_path));
app.use("/react", express.static(react_path));

app.listen(port, () => {
    console.log(`Server running at ${ipaddress}:${port}`);
});
