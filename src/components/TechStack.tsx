import { Gravity, MatterBody } from "@/components/ui/gravity";
import { Settings } from "lucide-react";

export default function TechStack() {
  return (
    <div className="flex flex-col w-full gap-6 px-6 py-4 shadow-[0_0px_1.2px_rgb(140,140,140)] rounded-lg ">
      <h2 className="text-lg flex items-center gap-2">
        <Settings />
        <span className="text-green-200 opacity-60">Tech Stack</span>
      </h2>
      <div className="w-full h-full min-h-[400px] flex flex-col relative font-azeretMono">
        <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
          {/* CSS Logo */}
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="20%"
            y="10%"
            bodyType="svg"
            sampleLength={3}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                fill="#000"
              />
            </svg>
          </MatterBody>
          {/* express Logo */}
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="5%"
            y="30%"
            bodyType="svg"
            sampleLength={3}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
                fill="#000"
              />
            </svg>
          </MatterBody>
          {/* HTML Logo */}
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="5%"
            y="30%"
            bodyType="svg"
            sampleLength={3}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                fill="#000"
              />
            </svg>
          </MatterBody>
        </Gravity>
      </div>
    </div>
  );
}
