import express from "express";
import { blogRouter } from "../modules/blog/blog.route";
import { videoRouter } from "../modules/videos/videos.router";
import { productRouter } from "../modules/products/product.router";
const router = express.Router();

const moduleRouter = [
  {
    path: "/blog",
    route: blogRouter,
  },
  {
    path: "/video",
    route: videoRouter,
  },
  {
    path: "/product",
    route: productRouter,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
