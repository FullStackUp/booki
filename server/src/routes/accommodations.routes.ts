import { Router, Response } from "express";
const router = Router();

/* GET accommodations listing. */
router.get("/", (_, res: Response) => {
  res.send("respond with a resource");
});

export default router;
