import GET from "@/lib/GET";

export async function getSliderInfo() {
  return GET({
    link: "/kjhkjh",
    tags: ["getSlider"],
    revalidate: 60,
  });
}
