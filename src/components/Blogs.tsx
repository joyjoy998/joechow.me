"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { timeFormatConverter } from "@/lib/timeFormatConverter";
import { Blog } from "@/types/blogType";

export default function Blogs({ blogs }: { blogs: Blog[] }) {
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog._id} className="mb-10">
          <Link href={`/blog/${blog.slug.current}`}>
            <div
              className={`flex flex-col sm:flex-row w-full lg:w-17/20 items-stretch gap-6 rounded-2xl  sm:shadow-[0_0px_1.2px_rgb(140,140,140)] shadow-[0_0px_2px_rgb(140,140,140)] hover:shadow-[0_0px_2px_rgb(140,140,140)] p-3 opacity-90 hover:opacity-100  hover:bg-muted`}
            >
              <div className="relative aspect-48/27 w-full sm:w-80 rounded-2xl shrink-0">
                <Image
                  src={blog.imageUrl}
                  alt="Blog image"
                  fill
                  className="object-cover "
                />
              </div>

              <div className="flex flex-col justify-between grow p-4">
                <div>
                  <h2 className="mb-2 font-bold">{blog.title}</h2>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Calendar size={13} className="mr-2" />
                    {timeFormatConverter(blog.publishedAt)}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Tag size={13} className="mr-2" />
                    {blog.tag}
                  </p>
                </div>
                <p className="text-sm ">{blog.summary}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
