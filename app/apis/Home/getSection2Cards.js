import GET from "@/lib/GET";

export async function getCards() {
  return GET({
    link: "/kjhkjh",
    tags: ["getCards"],
    revalidate: 60,
  });
}
