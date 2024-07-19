import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "技术",
    icon: "lightbulb",
    link: "/posts/tech/README.md",
  },
  {
    text: "学习",
    icon: "book",
    link: "/posts/study/README.md",
  },
  {
    text: "经验",
    icon: "droplet",
    link: "/posts/exp/README.md",
  },
  {
    text: "生活",
    icon: "fan",
    link: "/posts/life/README.md",
  },
]);
