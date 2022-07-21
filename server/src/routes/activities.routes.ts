import { Router, Response } from "express";
const router = Router();

/* GET activities listing. */
router.get("/", (_, res: Response) => {
  res.send("respond with a resource");
});

export default router;
