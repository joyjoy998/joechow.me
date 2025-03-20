import MotionDivWrapper from "@/components/MotionWrapper";
import Description from "@/components/Description";
import Blogs from "@/components/Blogs";
import { getAllBlogs } from "@/lib/getBlogs";

export default async function Page() {
  const blogs = await getAllBlogs();
  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col gap-10"
    >
      <Description page="Blog" />
      <Blogs blogs={blogs} />
    </MotionDivWrapper>
  );
}
