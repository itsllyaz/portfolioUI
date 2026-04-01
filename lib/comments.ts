import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

export async function saveComment(postId: string, user: any, text: string) {
  await addDoc(collection(db, "comments"), {
    postId,
    uid: user.uid,
    author: user.displayName,
    avatar: user.photoURL,
    text,
    createdAt: serverTimestamp(),
  });
}

