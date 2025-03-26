import { IconBrandLeetcode } from "@tabler/icons-react";
import { Flame } from "lucide-react";
import apiClient from "@/lib/apiClient";

export default async function LeetCodeStats() {
  const { data, error } = await apiClient.get("/api/leetcode/get");
  if (error) return null;
  const stats = data.data.userProfileUserQuestionProgressV2;

  return (
    <div className="flex flex-col w-full gap-6 px-6 py-4 shadow-[0_0px_1.2px_rgb(140,140,140)] rounded-lg ">
      <h2 className="text-lg flex items-center gap-2">
        <IconBrandLeetcode />
        <span className="text-green-200 opacity-60">LeetCode Tracker</span>
      </h2>
      <div className="flex flex-col p-4 rounded-xl shadow-sm w-full max-w-xl">
        <div className="mb-6">
          <h2 className="text-gray-600 text-xl font-medium mb-2">
            Total Solved
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-blue-500">
                {stats.numAcceptedQuestions.reduce(
                  (sum, item) => sum + (item.count || 0),
                  0
                ) || 0}
              </span>
              <span className="text-gray-600 text-xl font-normal ml-1">
                Problems
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Flame />
              <span className="text-gray-500 text-2xl font-medium">
                Beats {stats.userSessionBeatsPercentage[1].percentage}%
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex-1 rounded-lg px-6 py-4">
            <div className="text-teal-500 font-medium">Easy</div>
            <div className="text-right font-bold text-xl">
              {stats.numAcceptedQuestions[0].count}
            </div>
          </div>
          <div className="flex-1 rounded-lg px-6 py-4">
            <div className="text-yellow-500 font-medium">Med.</div>
            <div className="text-right font-bold text-xl">
              {stats.numAcceptedQuestions[1].count}
            </div>
          </div>
          <div className="flex-1 rounded-lg px-6 py-4">
            <div className="text-red-500 font-medium">Hard</div>
            <div className="text-right font-bold text-xl">
              {stats.numAcceptedQuestions[2].count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
