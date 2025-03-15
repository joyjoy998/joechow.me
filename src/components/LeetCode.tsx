import { IconBrandLeetcode } from "@tabler/icons-react";

export default function LeetCode() {
  return (
    <div className="flex flex-col w-full gap-6 px-6 py-4 shadow-[0_0px_1.2px_rgb(140,140,140)] rounded-lg ">
      <h2 className="text-lg flex items-center gap-2">
        <IconBrandLeetcode />
        <span className="text-green-200 opacity-60">LeetCode Tracker</span>
      </h2>
      <div className="flex flex-col items-center justify-center gap-5">
        <h3>Developing...</h3>
      </div>
    </div>
  );
}
