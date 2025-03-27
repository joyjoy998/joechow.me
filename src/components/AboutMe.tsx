import { Bot } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="w-full rounded-lg shadow-[0_0px_1.2px_rgb(140,140,140)] py-6 px-4">
      <h2 className="mb-6 ml-2 text-lg flex items-center gap-2">
        <Bot />
        <span className="text-zinc-900 dark:text-green-200 opacity-80">
          About Me
        </span>
      </h2>
      <ul className="flex flex-col gap-5 pl-6 text-sm list-disc text-gray-800 dark:text-white">
        <li>
          🙌 You can call me <span className="font-bold">Joe</span>,{" "}
          <span className="font-bold">Haochuan</span> or{" "}
          <span className="font-bold">浩川</span>.
        </li>

        <li>
          🏡 Current Location:{" "}
          <a
            className="font-bold"
            href="https://en.wikipedia.org/wiki/Wollongong"
            target="_blank"
          >
            Wollongong, NSW, AU
          </a>
          .
        </li>
      </ul>
    </div>
  );
}
