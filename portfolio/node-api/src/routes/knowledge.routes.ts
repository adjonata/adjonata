import { Router } from "express";

import KnowledgeController from "../controllers/knowledge.controller";
import KnowledgeValidation from "../validation/knowledge.valid";
import { verifyRequest } from "../utils/validation";

const KnowledgeRouter = Router();

KnowledgeRouter.get("/", KnowledgeController.getter);
KnowledgeRouter.post(
  "/",
  KnowledgeValidation.create,
  verifyRequest,
  KnowledgeController.create
);
KnowledgeRouter.put(
  "/:id",
  KnowledgeValidation.edit,
  verifyRequest,
  KnowledgeController.edit
);
KnowledgeRouter.delete(
  "/:id",
  KnowledgeValidation.delete,
  verifyRequest,
  KnowledgeController.delete
);

export default KnowledgeRouter;