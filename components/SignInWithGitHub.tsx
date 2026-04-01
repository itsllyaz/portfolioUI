"use client";

import { GithubAuthProvider, signInWithPopup, onAuthStateChanged, User } from "firebase/auth";
import { useState,useEffect } from "react";
import {auth} from "../config/firebase"

export function useAuthUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  return user;
}


export default function SignInWithGitHub() {
  const handleSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User:", result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-all font-headline text-sm font-bold uppercase tracking-widest"
    >

      Sign in with GitHub
    </button>
  );
}

