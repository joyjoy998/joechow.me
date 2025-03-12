"use client";

import { usePathname } from "next/navigation";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { navItems } from "@/lib/navItems";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import Avatar from "@/components/Avatar";

export default function Header() {
  const pathname = usePathname();
  const page = pathname.split("/").slice(0, 2).join("/");

  return (
    <header className="grid w-full grid-flow-col grid-cols-3 sm:grid-cols-4">
      <Avatar page={page} />
      <NavBar items={navItems} />

      <div className="flex items-center justify-end gap-2">
        <SignedOut>
          <SignInButton
            mode="modal"
            forceRedirectUrl={pathname}
            signUpForceRedirectUrl={pathname}
          >
            <Button variant="ghost" size="icon" className="rounded-xl">
              <UserPlus />
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
