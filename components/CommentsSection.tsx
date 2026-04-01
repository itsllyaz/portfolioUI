"use client";

import { auth } from "../config/firebase";
import CommentBox from "./CommentBox";
import { Comment } from "./Comment";
import { useComments } from "./useComments";
import { saveComment } from "../lib/comments";

export default function CommentsSection({ post }: { post: any }) {
  const comments = useComments(post.slug);

  return (
    <section className="mt-12 bg-surface-container-lowest border border-black p-8 md:p-16">
      <h2 className="text-2xl font-headline font-bold tracking-tight mb-8">
        Discussion ({comments.length})
      </h2>

      <div className="mb-12 p-8 bg-surface-container-low border border-dashed border-black/20 text-center">
        <p className="mb-6 font-body text-sm text-on-surface-variant">
          Join the conversation. Share your thoughts on {post.title.toLowerCase()}.
        </p>
        <CommentBox
          onSubmit={(text) => saveComment(post.slug, auth.currentUser, text)}
        />
      </div>

      {comments.length > 0 && (
        <div className="space-y-10">
          {comments.map((c) => (
            <Comment key={c.id} comment={c} />
          ))}
        </div>
      )}
    </section>
  );
}

