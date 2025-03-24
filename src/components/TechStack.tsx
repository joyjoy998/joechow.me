"use client";
import { Settings } from "lucide-react";
import CSSIcon from "@/public/icons/CSSIcon";
import ExpressIcon from "@/public/icons/ExpressIcon";
import HtmlIcon from "@/public/icons/HtmlIcon";
import JSIcon from "@/public/icons/JSIcon";
import MySQLIcon from "@/public/icons/MySQLIcon";
import NextIcon from "@/public/icons/NextIcon";
import NodeIcon from "@/public/icons/NodeIcon";
import PrismaIcon from "@/public/icons/PrismaIcon";
import ReactIcon from "@/public/icons/ReactIcon";
import RedisIcon from "@/public/icons/RedisIcon";
import SupabaseIcon from "@/public/icons/SupabaseIcon";
import TailwindIcon from "@/public/icons/TailwindIcon";
import { MagneticIcon } from "@/components/ui/magnetic";

export default function TechStack() {
  return (
    <div className="flex flex-col w-full gap-6 px-6 py-4 shadow-[0_0px_1.2px_rgb(140,140,140)] rounded-lg ">
      <h2 className="text-lg flex items-center gap-2">
        <Settings />
        <span className="text-green-200 opacity-60">Tech Stack</span>
      </h2>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex justify-between w-full">
          <MagneticIcon Icon={HtmlIcon} />
          <MagneticIcon Icon={CSSIcon} />
          <MagneticIcon Icon={JSIcon} />
          <MagneticIcon Icon={ReactIcon} />
          <MagneticIcon Icon={TailwindIcon} />
          <MagneticIcon Icon={NodeIcon} />
        </div>
        <div className="flex justify-between w-full">
          <MagneticIcon Icon={NextIcon} />
          <MagneticIcon Icon={MySQLIcon} />
          <MagneticIcon Icon={PrismaIcon} />
          <MagneticIcon Icon={ExpressIcon} />
          <MagneticIcon Icon={SupabaseIcon} />
          <MagneticIcon Icon={RedisIcon} />
        </div>
      </div>
    </div>
  );
}
