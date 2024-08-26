import GET from "@/lib/GET";

export async function getLastCards() {
  return GET({
    link: "/kjhkjh",
    tags: ["getLastCards"],
    revalidate: 60,
  });
}
