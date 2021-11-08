import { Router as _Router, static as Static} from "express";
import { join as _join, dirname as _dn } from "path";

const router = _Router();
const frontend_path = _join(_dn(_dn(_dn(__dirname))), "frontend-react", "build");

// router.use("/react", Static(frontend_path));

export default router;
export { router, frontend_path as react_path };