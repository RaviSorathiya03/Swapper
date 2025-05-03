
import ProfileCard from "@/components/globals/ProfileCard";
import { prisma } from "@/db";
import { useSession } from "next-auth/react";

const session = useSession();

async function getBalance(){
  
}

export default async function(){
    return (
        <ProfileCard />
    );
}