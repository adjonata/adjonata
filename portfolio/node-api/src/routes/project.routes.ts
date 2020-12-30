import { Router } from "express";

import ProjectController from "../controllers/project.controller";
import ProjectValitadion from "../validation/project.valid";
import { verifyRequest } from "../utils/validation";

const ProjectRouter = Router();

ProjectRouter.get("/", ProjectController.getter);
ProjectRouter.post(
  "/",
  ProjectValitadion.create,
  verifyRequest,
  ProjectController.create
);
ProjectRouter.put(
  "/:id",
  ProjectValitadion.edit,
  verifyRequest,
  ProjectController.edit
);
ProjectRouter.delete("/:id", ProjectController.delete);

export default ProjectRouter;
