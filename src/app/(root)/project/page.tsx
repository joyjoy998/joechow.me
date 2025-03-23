import MotionDivWrapper from "@/components/MotionWrapper";
import Description from "@/components/Description";
import { getProjects } from "@/lib/getProject";
import Projects from "@/components/Projects";

export default async function Page() {
  const projects = await getProjects();
  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col gap-10"
    >
      <Description page="Projects" />
      <Projects projects={projects} />
    </MotionDivWrapper>
  );
}
