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

      <p className="text-gray-800 dark:text-white mb-4 text-base sm:mb-6 sm:text-lg bg-linear-to-b to-muted-foreground from-foreground bg-clip-text">
        Write code, fix bugs, <br />
        and occasionally wonder why it worked the first time.🤣
      </p>
      <div className="flex gap-6 ">
        <SocialMediaLink link="https://www.linkedin.com/in/haochuan-zhou/">
          <IconBrandLinkedin />
        </SocialMediaLink>
        <SocialMediaLink link="https://github.com/joyjoy998">
          <IconBrandGithub />
        </SocialMediaLink>
        <SocialMediaLink link="mailto:mrzhouhc@hotmail.com">
          <Mail />
        </SocialMediaLink>
        <Resume />
      </div>
    </div>
  );
}
