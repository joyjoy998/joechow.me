export const seo = {
  title: "JoeJoe | Developer",
  description:
    "I&apos;m a postgraduate student at the University of Wollongong in Australia, majoring in Computer Science. I write code, fix bugs, and occasionally wonder why it worked the first time.",
  url: new URL(
    process.env.NODE_ENV === "production"
      ? "https://joejoe.me"
      : "http://localhost:3002"
  ),
} as const;
