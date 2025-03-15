"use client";

export default function Description({
  page,
  supplement,
}: {
  page: string;
  supplement?: string;
}) {
  return (
    <section className="w-full">
      <h1 className="text-4xl font-semibold ">{page}</h1>
      {supplement && <p className="font-light ">{supplement}</p>}
    </section>
  );
}
