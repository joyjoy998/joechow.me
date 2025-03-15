import IntroAnimation from "@/components/IntroAnimation";
import { Github, Linkedin, Mail } from "lucide-react";
import SocialMediaLink from "@/components/SocialMediaLink";

export default function Introduction() {
  return (
    <div>
      <p className="mb-6 font-semibold">
        <span className="text-transparent sm:bg-linear-to-r to-foreground bg-linear-to-t from-muted-foreground bg-clip-text lg:text-[54px] text-[40px]">
          Hi, I&apos;m Joe
        </span>
      </p>
      <div className="h-10 mb-8 sm:mb-10">
        <IntroAnimation text1={"<Web Developer />"} text2="<Full Stack />" />
      </div>
      <p className="mb-8 text-xl text-transparent sm:mb-10 sm:text-[26px] bg-linear-to-r from-green-200 via-green-100 opacity-60 to-green-200 bg-clip-text w-fit">
        #Joe #Haochuan #浩川
      </p>

      <p className="mb-4 text-sm sm:mb-6 sm:text-base bg-linear-to-b to-muted-foreground from-foreground bg-clip-text">
        I&apos;m a student at the University of Wollongong in Australia,
        majoring in Computer Science. I write code, fix bugs, and occasionally
        wonder why it worked the first time.
      </p>
      <div className="flex gap-6 ">
        <SocialMediaLink link="#">
          <Linkedin />
        </SocialMediaLink>
        <SocialMediaLink link="#">
          <Github />
        </SocialMediaLink>
        <SocialMediaLink link="mailto:#">
          <Mail />
        </SocialMediaLink>
      </div>
    </div>
  );
}
