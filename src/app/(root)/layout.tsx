import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainWrapper from "@/components/MainWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col items-center px-6 pt-10 mx-auto max-w-2xl lg:max-w-3xl sm:px-8 md:px-10 lg:px-12 xl:max-w-4xl min-h-svh 
     shadow-lg"
    >
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  );
}
