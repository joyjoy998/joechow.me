import IntroAnimation from "@/components/IntroAnimation";
import { Mail } from "lucide-react";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import SocialMediaLink from "@/components/SocialMediaLink";
import Resume from "@/components/Resume";

export default function Introduction() {
  return (
    <div>
      <p className="mb-6 font-semibold">
        <span className="text-gray-800 text-transparent sm:bg-gradient-to-r to-foreground bg-gradient-to-t from-muted-foreground bg-clip-text lg:text-[54px] text-[40px]">
          Hi, I&apos;m Joe
        </span>
      </p>
      <div className="h-10 mb-8 sm:mb-10">
        <IntroAnimation text1={"<Web Developer />"} text2="<Full Stack />" />
      </div>
      <p className="mb-8 text-xl text-transparent sm:mb-10 sm:text-[26px] bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 dark:from-green-300 dark:via-green-200 opacity-60 dark:to-green-300 bg-clip-text w-fit">
        #Joe #Haochuan #浩川
      </p>

      <p className="text-gray-800 dark:text-white mb-4 text-sm sm:mb-6 sm:text-base bg-linear-to-b to-muted-foreground from-foreground bg-clip-text">
        I&apos;m a student at the University of Wollongong in Australia,
        majoring in Computer Science. I write code, fix bugs, and occasionally
        wonder why it worked the first time.
      </p>
      <div className="flex gap-6 ">
        <SocialMediaLink link="#">
          <IconBrandLinkedin />
        </SocialMediaLink>
        <SocialMediaLink link="#">
          <IconBrandGithub />
        </SocialMediaLink>
        <SocialMediaLink link="mailto:#">
          <Mail />
        </SocialMediaLink>
        <Resume />
      </div>
    </div>
  );
}
