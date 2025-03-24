import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainWrapper from "@/components/MainWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col items-center px-6 pt-10 mx-auto 
            w-[90%] sm:w-[85%]
            md:max-w-[800px] 
            min-h-svh shadow-lg"
    >
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  );
}
