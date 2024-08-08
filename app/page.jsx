import Head from "next/head";
import Section1 from "./components/Home/Section1/Section1";
import Section2 from "./components/Home/Section2/Section2";

export default function Home() {
  return (
    <div className="2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] flex flex-col gap-7 pb-5">
      <Section1 />
      <Section2 />
    </div>
  );
}
