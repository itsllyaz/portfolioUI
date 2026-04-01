"use client";

import { useEffect, useState } from "react";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

export function useComments(postId: string) {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("postId", "==", postId),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            // Normalize Firestore field "text" into "content"
            content: data.text ?? data.content ?? "",
          };
        })
      );
    });

    return () => unsub();
  }, [postId]);

  return comments;
}
 
