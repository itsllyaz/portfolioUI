"use client";

import { useState } from "react";
import { useAuthUser } from "./useAuthUser"; // hook for auth state
import SignInWithGitHub from "./SignInWithGitHub";

export default function CommentBox({ onSubmit }: { onSubmit: (text: string) => void }) {
  const user = useAuthUser();
  const [text, setText] = useState("");

  if (!user) {
    return <SignInWithGitHub />;
  }

  return (
    <div className="space-y-4">
      <p className="text-sm">Signed in as {user.displayName}</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Write your comment..."
      />
      <button
        onClick={() => {
          if (text.trim()) {
            onSubmit(text);
            setText("");
          }
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Post Comment
      </button>
    </div>
  );
}

