import { Router } from "express";

import AboutRouter from "./about.routes";
import KnowledgeRouter from "./knowledge.routes";

const router = Router();

router.use("/about", AboutRouter);
router.use("/knowledge", KnowledgeRouter);

export default router;
