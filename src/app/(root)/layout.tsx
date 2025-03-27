import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainWrapper from "@/components/MainWrapper";
import { GridBackground } from "@/components/Background";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <GridBackground />
      <div
        className="flex flex-col items-center px-6 pt-10 mx-auto 
                    w-[90%] sm:w-[85%]
                    md:max-w-[800px] 
                    min-h-svh shadow-lg
                    relative z-1
                    text-zinc-800 
                    dark:text-zinc-200
                    bg-zinc-50/60  
                    dark:bg-black/50
                    backdrop-blur-lg
                    ring-1 ring-zinc-200 
                    dark:ring-zinc-700/40"
      >
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </div>
    </div>
  );
}
