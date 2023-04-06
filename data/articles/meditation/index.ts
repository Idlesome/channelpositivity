import { StaticImageData } from "next/image";
import meditation_the_key_to_overcoming_procrastination from "./markdown/001_meditation_the_key_to_overcoming_procrastination.md";

const articles: Article[] = [
  {
    title: "Meditation: The Key To Overcoming Procrastination",
    markdown: meditation_the_key_to_overcoming_procrastination,
    images: {
      cover: {
        src: "mountain_temple.jpg",
        alt: "Peaceful Mountain Temple",
        color: "#4F3A63",
      },
    },
    slug: "meditation-the-key-to-overcoming-procrastination",
    category: ["meditation", "pro"],
    excerpt: "Unlock the power of meditation and conquer procrastination",
    meta: {
      title: "Meditation: The Key To Overcoming Procrastination",
      description: "Unlock the power of meditation and conquer procrastination",
    },
  },
  {
    title: "Running: The Key To Overcoming Procrastination",
    markdown: meditation_the_key_to_overcoming_procrastination,
    images: {
      cover: {
        src: "mountain_temple.jpg",
        alt: "Peaceful Mountain Temple",
        color: "#4F3A63",
      },
    },
    slug: "Running-the-key-to-overcoming-procrastination",
    category: ["running", "pro"],
    excerpt: "Unlock the power of running and conquer procrastination",
    meta: {
      title: "Running: The Key To Overcoming Procrastination",
      description: "Unlock the power of running and conquer procrastination",
    },
  },
];

export default articles;
