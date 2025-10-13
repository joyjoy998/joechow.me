import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { formatDistanceToNow } from "date-fns";
import { urlFor } from "@/lib/sanityImageUrl";
import apiClient from "@/lib/apiClient";
import NotFound from "@/components/notFound";

type Params = Promise<{
  slug: string;
}>;

export const revalidate = 180;

export default async function Blog({ params }: { params: Params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const res = await apiClient.get(`/api/blog/get/${slug}`);
  const { data, success } = res.data;
  // console.log(success);
  if (!success) {
    return <NotFound />;
  }
  const blog = data;
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

          <h1 className="mb-2 text-4xl font-bold">{blog.title}</h1>

          <p className=" text-muted-foreground">Author | {blog.author}</p>

          <p className="text-sm text-muted-foreground">
            Published{" "}
            {formatDistanceToNow(new Date(blog.publishedAt), {
              addSuffix: true,
            })}
          </p>
        </header>

        {/* <main className="mt-16 prose max-w-none prose-invert prose-p:text-foreground prose-h1:text-foreground prose-h2:text-foreground prose-h3:text-foreground prose-h4:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-strong:font-bold prose-a:text-blue-400 prose-a:opacity-80 prose-code:text-foreground prose-img:opacity-90 prose-p:tracking-tight prose-p:text-sm prose-li:text-sm">
          <MDXRemote source={content} />
        </main> */}
        <main className="mt-8">
          <PortableText value={blog.content} components={components} />
        </main>
      </article>
    </section>
  );
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      const isGif = value.asset._ref.endsWith(".gif");
      return (
        <Image
          src={urlFor(value).width(400).url()}
          width={400}
          height={200}
          alt={value.alt || "blog post image"}
          className="my-8 rounded-lg mx-auto block"
          unoptimized={isGif}
        />
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base font-bold mt-3 mb-1">{children}</h5>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};
