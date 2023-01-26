import { StaticImageData } from "next/image";
import meditation_the_key_to_overcoming_procrastination from "./markdown/001_meditation_the_key_to_overcoming_procrastination.md";

const articles: Article<StaticImageData>[] = [
  {
    title: "Meditation: The Key To Overcoming Procrastination",
    markdown: meditation_the_key_to_overcoming_procrastination,
    images: {
      cover: {
        src: "mountain_temple.jpg",
        alt: "Peaceful Mountain Temple",
      },
    },
    slug: "meditation-the-key-to-overcoming-procrastination",
    category: ["meditation"],
    excerpt: "Unlock the power of meditation to conquer procrastination",
    meta: {
      title: "Meditation: The Key To Overcoming Procrastination",
      description: "Unlock the power of meditation to conquer procrastination",
    },
  },
];

export default articles;
