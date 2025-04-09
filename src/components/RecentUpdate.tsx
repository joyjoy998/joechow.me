import { Newspaper, Calendar, Notebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blogType";
import { timeFormatConverter } from "@/lib/timeFormatConverter";
import apiClient from "@/lib/apiClient";

export default async function RecentUpdate() {
  const res = await apiClient.get("/api/blog/get");
  const { data, success } = res.data;
  if (!success) {
    return <div>Error fetching data</div>;
  }
  const blogs = data;
  const recentBlogs = blogs.slice(0, 3) as Blog[];
  return (
    <div className="mt-10">
      <div className="flex items-center justify-start w-full gap-3 mb-10">
        <Newspaper />
        <span className="text-zinc-900 text-lg dark:text-green-200 opacity-80">
          Recent Update
        </span>
      </div>
      <ul className="grid w-9/10 grid-cols-1 gap-10">
        {recentBlogs.map((blog) => (
          <li key={blog.slug.current}>
            <Link href={`/blog/${blog.slug.current}`}>
              <div className="relative overflow-hidden rounded-3xl hover:shadow-[0_0px_2px_rgb(140,140,140)] shadow-[0_0px_1.2px_rgb(140,140,140)] opacity-70 hover:opacity-90">
                <div className="relative aspect-[512/300] w-full ">
                  <Image
                    src={blog.imageUrl}
                    alt="Blog image"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 py-2 px-4 rounded-b-3xl backdrop-blur-3xl">
                  <h2 className="font-bold text-sm md:text-base text-foreground dark:text-black dark:opacity-80">
                    {blog.title}
                  </h2>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} className="inline-block" />
                      <span>{timeFormatConverter(blog.publishedAt)}</span>
                      <Notebook size={14} className="inline-block ml-2" />
                      <span>{blog.tag}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
