"use client";

import useSWR from "swr";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import apiClient from "@/lib/apiClient";
import { useUser } from "@clerk/nextjs";
import { Loading } from "@/components/Loading";
import DeleteButton from "@/components/DeleteButton";

interface Message {
  id: string;
  message: string;
  userId: string;
  createdAt: string;
  userName: string;
  userImg: string;
}

const fetcher = (url: string) =>
  apiClient.get(url).then((res) => res.data.data);

export default function Messages() {
  const { user } = useUser();
  const {
    data: messages,
    error,
    isLoading,
  } = useSWR("/api/message/get", fetcher);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <ul className="flex flex-col space-y-2">
      {messages.map((message: Message, index: number) => {
        const isCurrentUser = message.userId === user?.id;

        const getLineHeight = (message: Message) => {
          const length = message.message.length;

          if (length < 50) return "h-3";
          if (length < 100) return "h-6";
          if (length < 150) return "h-9";
          if (length < 200) return "h-12";
          if (length < 250) return "h-21";
          if (length < 300) return "h-24";
          if (length < 350) return "h-27";
          if (length < 400) return "h-30";
          if (length < 450) return "h-33";
          return "h-36";
        };

        return (
          <li key={message.id}>
            <div className="flex items-start gap-3 my-1 group relative">
              <div className="flex flex-col items-center shrink-0 gap-2">
                <Image
                  src={message.userImg}
                  width={40}
                  height={40}
                  alt="user profile image"
                  className="mb-1 rounded-full"
                />
                {index != messages.length - 1 && (
                  <div
                    className={`w-1 border-l-2 border-foreground ${getLineHeight(message)}`}
                  ></div>
                )}
              </div>

              <div className="flex flex-col w-full ">
                <div className="flex items-center gap-2">
                  <p className="text-lg">{message.userName}</p>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(message.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>

                <p className="mt-1 text-base font-light break-words">
                  {message.message}
                </p>
                <div className="ml-0 flex justify-start mt-2">
                  {isCurrentUser && <DeleteButton messageId={message.id} />}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
