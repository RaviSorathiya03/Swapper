"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center mt-10">
      <div>
        <p className="text-5xl font-bold">The crypto of tommorow, <p className="text-blue-500 inline">today</p></p>
      </div>
      <div>
        <p className="mt-5 text-xl text-slate-500">Create the Fictionless Wallet with just the Google Account</p>
      </div>
      <div className="mt-5">
        <Button onClick={() => {
          signIn("google")
        }}>
          Sign-in
        </Button>
      </div>
    </div>
  );
}
