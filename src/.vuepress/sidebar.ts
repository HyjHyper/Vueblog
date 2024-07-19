import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/": [
    "tech/",
    "study/",
    "exp/",
    "life/",
  ],
  "/posts/tech/": "structure",
  "/posts/study/": "structure",
  "/posts/exp/": "structure",
  "/posts/life": "structure",
});
