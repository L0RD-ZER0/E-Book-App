import { Router as _Router, static as Static } from "express";

const router = _Router();

router.use("/", (req, res, next) => {
    if (req.originalUrl === "/") {
        if (Math.random() > 0.5) {
            res.redirect("/react");
        } else {
            res.redirect("/angular");
        }
    }
    next();
});

export default router;