import GET from "@/lib/GET";

export async function getAmazingCards() {
  return GET({
    link: "/kjhkjh",
    tags: ["getAmazingCards"],
    revalidate: 60,
  });
}
