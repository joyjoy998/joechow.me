"use client";
import React from "react";

export function GridBackground() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-white dark:bg-black"></div>

        <div
          className="absolute inset-0 transition-opacity"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "25px 25px",
          }}
        />

        <div
          className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "25px 25px",
          }}
        />
      </div>
      <span
        className="pointer-events-none fixed top-0 block h-[800px] w-full select-none z-0
                     bg-[radial-gradient(103.72%_46.58%_at_50%_0%,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0)_100%)] 
                     dark:bg-[radial-gradient(103.72%_46.58%_at_50%_0%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]"
      />
    </>
  );
}
