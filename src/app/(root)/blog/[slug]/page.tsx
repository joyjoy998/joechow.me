import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { formatDistanceToNow } from "date-fns";
import { getBlogBySlug } from "@/lib/getBlogs";
import { notFound } from "next/navigation";

export default async function Blog({ params }: { params: { slug: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const blog = await getBlogBySlug(slug);
  if (!blog) {
    notFound();
  }
  return (
    <section className="flex pr-8 mx-auto">
      <aside className="hidden lg:block sticky top-10 self-start mr-8">
        <Link
          href="/blog"
          className="sticky flex items-center gap-1 py-2 pl-4 pr-5 rounded-full top-10  text-foreground font-semibold bg-[#f2f2f21a] "
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
      </aside>

      <article className="w-full max-w-3xl mx-auto mt-16">
        <header>
          {blog.imageUrl && (
            <div className="relative w-full flex justify-center items-center mb-10 overflow-hidden rounded-lg aspect-240/135">
              <Image
                src={blog.imageUrl}
                alt={blog.title || ""}
                className="object-cover"
                fill
              />
            </div>
          )}

          <p className="mb-2 text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(blog.publishedAt), {
              addSuffix: true,
            })}{" "}
            | {blog.tag}
          </p>

          <h1 className="mb-2 text-4xl font-bold">{blog.title}</h1>

          <p className="mb-6 text-muted-foreground">{blog.author}</p>

          <p className="">{blog.summary}</p>
        </header>

        {/* <main className="mt-16 prose max-w-none prose-invert prose-p:text-foreground prose-h1:text-foreground prose-h2:text-foreground prose-h3:text-foreground prose-h4:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-strong:font-bold prose-a:text-blue-400 prose-a:opacity-80 prose-code:text-foreground prose-img:opacity-90 prose-p:tracking-tight prose-p:text-sm prose-li:text-sm">
          <MDXRemote source={content} />
        </main> */}
        <main className="mt-16">
          <PortableText value={blog.content} />
        </main>
      </article>
    </section>
  );
}
