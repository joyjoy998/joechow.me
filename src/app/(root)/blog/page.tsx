import MotionDivWrapper from "@/components/MotionWrapper";

export default async function Page() {
  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col gap-10"
    >
      <section className="w-full">
        <h1 className="text-4xl font-semibold ">Blog</h1>
      </section>
    </MotionDivWrapper>
  );
}
