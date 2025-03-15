import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import Description from "@/components/Description";
import MotionDivWrapper from "@/components/MotionWrapper";
import CommentArea from "@/components/CommentArea";
import Message from "@/components/Message";
import Image from "next/image";

export default async function Page() {
  const user = await currentUser();
  return (
    <div className="flex flex-col w-full gap-20 lg:w-2/3">
      <MotionDivWrapper initial={{ y: 30 }} animate={{ y: 0 }}>
        <Description
          page="Messages"
          supplement="Feel free to share your mind💭"
        />
      </MotionDivWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        {user ? (
          <CommentArea>
            <Image
              src={user.imageUrl}
              width={40}
              height={40}
              alt="user profile image"
              className="rounded-full "
            />
          </CommentArea>
        ) : (
          <div className="flex items-center justify-start h-20 px-10 pr-2 text-sm rounded-lg bg-secondary text-muted-foreground">
            🔓 Please log in to leave a message
          </div>
        )}
      </Suspense>
      <Message />
      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </div>
  );
}
