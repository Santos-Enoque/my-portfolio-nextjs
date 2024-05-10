import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="absolute flex flex-col items-center justify-center w-full px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
