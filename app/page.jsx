import Section1 from "./components/Home/Section1/Section1";
import Section2 from "./components/Home/Section2/Section2";
import Section3 from "./components/Home/Section3/Section3";

export default function Home() {
  return (
    <div className="2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] flex flex-col gap-7 pb-5">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
