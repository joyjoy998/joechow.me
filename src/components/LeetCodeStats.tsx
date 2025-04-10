"use client";

import { IconBrandLeetcode } from "@tabler/icons-react";
import { Flame } from "lucide-react";
import apiClient from "@/lib/apiClient";
import { useState, useEffect } from "react";

interface QuestionCount {
  count: number;
  difficulty: "EASY" | "MEDIUM" | "HARD";
}

interface BeatPercentage {
  difficulty: "EASY" | "MEDIUM" | "HARD";
  percentage: number | null;
}

interface LeetCodeStats {
  numAcceptedQuestions: QuestionCount[];
  userSessionBeatsPercentage: BeatPercentage[];
}

export default function LeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiClient.get("/api/leetcode/get");
        if (res.data.success) {
          setStats(res.data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching LeetCode stats:", err);
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error fetching data</div>;
  if (!stats) return <div>Loading...</div>;

  return (
    <div className="flex flex-col w-full gap-1 px-6 py-4 shadow-[0_0px_1.2px_rgb(140,140,140)] rounded-lg ">
      <h2 className="text-lg flex items-center gap-2">
        <IconBrandLeetcode />
        <span className="text-zinc-900 dark:text-green-200 opacity-80">
          LeetCode Tracker
        </span>
      </h2>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="items-baseline">
            <h2 className="text-blue-500 text-3xl font-bold mr-2">
              {stats.numAcceptedQuestions.reduce(
                (sum: number, item: QuestionCount) => sum + (item.count || 0),
                0
              ) || 0}
            </h2>
            <div className="text-gray-600 dark:text-white text-[12px]">
              Problems Solved
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Flame className="text-orange-500" />
            <span className="text-gray-600 dark:text-white font-medium">
              Beats {stats.userSessionBeatsPercentage[1].percentage}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-2 text-center flex items-center justify-between">
            <div className="text-teal-500 font-medium">Easy</div>
            <div className="text-gray-800 dark:text-white text-lg font-bold">
              {stats.numAcceptedQuestions[0].count}
            </div>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-2 text-center flex items-center justify-between">
            <div className="text-yellow-600 text-sm font-medium">Med.</div>
            <div className="text-gray-800 dark:text-white text-lg font-bold">
              {stats.numAcceptedQuestions[1].count}
            </div>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-2 text-center flex items-center justify-between">
            <div className="text-red-600 text-sm font-medium">Hard</div>
            <div className="text-gray-800 dark:text-white text-lg font-bold">
              {stats.numAcceptedQuestions[2].count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
