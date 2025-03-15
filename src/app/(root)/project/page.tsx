import MotionDivWrapper from "@/components/MotionWrapper";
import Description from "@/components/Description";

export default async function Page() {
  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col gap-10"
    >
      <Description page="Projects" />
    </MotionDivWrapper>
  );
}
