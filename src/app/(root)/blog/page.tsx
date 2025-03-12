import MotionDivWrapper from "@/components/MotionWrapper";

export default async function Page() {
  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col gap-10"
    >
      <section className="w-full mb-20 lg:w-2/3 min-h-[calc(100svh-500px)] flex items-center gap-20">
        <p>This is a blog post. It is a page that contains a blog post.</p>
      </section>
    </MotionDivWrapper>
  );
}
