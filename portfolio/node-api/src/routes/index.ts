import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log(req.body);
  return res.json({ message: "Testando primeira requisição" });
});

export default router;
