import { Router } from "express";

import SocialController from "../controllers/social.controller";
import SocialValidation from "../validation/social.valid";
import { verifyRequest } from "../utils/validation";

const SocialRouter = Router();

SocialRouter.get("/", SocialController.getter);
SocialRouter.post(
  "/",
  SocialValidation.create,
  verifyRequest,
  SocialController.create
);
SocialRouter.put(
  "/:id",
  SocialValidation.edit,
  verifyRequest,
  SocialController.edit
);
SocialRouter.delete("/:id", SocialController.delete);

export default SocialRouter;
