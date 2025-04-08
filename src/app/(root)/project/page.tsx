import MotionDivWrapper from "@/components/MotionWrapper";
import Description from "@/components/Description";
import Projects from "@/components/Projects";
import apiClient from "@/lib/apiClient";

export const dynamic = "force-dynamic";

export default async function Page() {
  const res = await apiClient.get("/api/project/get");
  const { data, success } = res.data;
  if (!success) {
    return <div>Error fetching data</div>;
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
