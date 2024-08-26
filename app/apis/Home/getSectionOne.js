import GET from "@/lib/GET";

export async function getSlider() {
  return GET({
    link: "/kjhkjh",
    tags: ["getSlider"],
    revalidate: 60,
  });
}
