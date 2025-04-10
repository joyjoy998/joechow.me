import MotionDivWrapper from "@/components/MotionWrapper";
import Description from "@/components/Description";
import Projects from "@/components/Projects";
import apiClient from "@/lib/apiClient";
import NotFound from "@/components/notFound";

export const revalidate = 180;

export default async function Page() {
  const res = await apiClient.get("/api/project/get");
  const { data, success } = res.data;
  if (!success) {
    return <NotFound />;
  }
  const projects = data;
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
