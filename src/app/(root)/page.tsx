import MotionDivWrapper from "@/components/MotionWrapper";
import Introduction from "@/components/Introduction";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import LeetCode from "@/components/LeetCodeStats";
import RecentUpdate from "@/components/RecentUpdate";

export default function Page() {
  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <section className="w-full mb-5 lg:w-2/3 min-h-[calc(100svh-700px)] flex items-center gap-20">
        <Introduction />
      </section>
      <section className="relative flex flex-col justify-between w-full gap-10 lg:flex-row">
        <div className="w-full">
          <RecentUpdate />
        </div>

        <aside className="lg:w-[680px] w-full lg:sticky lg:h-fit lg:-top-10 flex flex-col gap-12 rounded-2xl ">
          <AboutMe />
          <TechStack />
          <LeetCode />
        </aside>
      </section>
    </MotionDivWrapper>
  );
}
