import express from "express";
import { blogRouter } from "../modules/blog/blog.route";
const router = express.Router();

const moduleRouter = [
  {
    path: "/blog",
    route: blogRouter,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
