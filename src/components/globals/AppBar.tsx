"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AppBar({children}: {children: React.ReactNode}) {
    const session = useSession();

    return(
     
            <div className="border-b w-full px-2 py-2 flex flex-col justify-between">
            <div className="flex justify-between">
            <div className="text-2xl font-bold">
                DCEX
            </div>
            <div>
                {session.data?.user ? <Button name="Logout" onClick={()=>{
                    signOut()
                }}>Sign-out</Button> : <Button name="Login" onClick={()=>{
                    signIn()
                }}>Sign-in</Button>}
            </div>
            
            </div>
            <hr className="mt-2"/>
            {children}
        </div>
      
    );
}