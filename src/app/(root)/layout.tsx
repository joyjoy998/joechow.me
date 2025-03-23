import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainWrapper from "@/components/MainWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center px-6 pt-10 mx-auto w-[75%] sm:w-[65%] md:w-[60%] lg:w-[55%] xl:w-[50%] min-h-svh shadow-lg">
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  );
}
