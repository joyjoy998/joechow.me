"use client";

import { Trash2 } from "lucide-react";
import apiClient from "@/lib/apiClient";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

const handleDeleteMessage = async (messageId: string) => {
  try {
    await apiClient.delete(`/api/message/delete?id=${messageId}`);
    window.location.reload();
  } catch (error) {
    console.error("Error deleting message:", error);
  }
};

export default function DeleteButton({ messageId }: { messageId: string }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  return (
    <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
      <AlertDialogTrigger asChild>
        <button
          className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700"
          aria-label="Delete message"
        >
          <Trash2 size={14} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this message? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDeleteMessage(messageId)}
            className="bg-red-500 hover:bg-red-600"
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
