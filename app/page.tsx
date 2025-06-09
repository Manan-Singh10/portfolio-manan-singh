import Learning from "./components/Learning";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="gap-20 flex flex-col items-center justify-center text-zinc-200 m-10 sm:mx-15 lg:mx-20">
      <Intro />
      <Skills />
      <Learning />
    </div>
  );
}
