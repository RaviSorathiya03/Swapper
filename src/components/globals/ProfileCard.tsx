"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function ProfileCard(){

        const session =  useSession();
        const router = useRouter();
        if(session.status === "loading"){
            return <div>Loading...</div>;
        }
    
        if(!session.data?.user){
            router.push("/");
            return null;
        }
        return(
           <div className="pt-8 flex justify-center">
            <div className="max-w-4xl bg-white rounded shadow w-full p-12">
                <Greeting image={session.data?.user?.image} name={session.data?.user?.name}/>
                <Assets />
            </div>
           </div>
        );
    }
    
    function Greeting({image, name}:{
        image: string | undefined | null;
        name: string | undefined | null;
    }){
        return(
            <div className="flex ">
                <img src={image || ""} className="rounded-full w-12 h-12 pr-4"/>
                <div className="text-2xl font-semibold flex flex-col justify-center ">
                    Welcome Back, {name}
                </div>
            </div>
        );
    }
    
    function Assets(){
        return(
            <div className="text-slate-500">
            <div className="mx-12 py-2">
                Account assets
            </div>
            <div className="flex justify-between mx-12">
                <div className="flex">
                    <div className="text-5xl font-bold text-black">
                        $0
                    </div>
                    <div className="font-slate-500 font-bold text-3xl flex flex-col justify-end pb-0 pl-2">
                        USD
                    </div>
                </div>
    
                <div>
                    <Button onClick={() => {
                       
                    }}>Copy you wallet address</Button>
                </div>
            </div>
    
            <div className="pt-4 bg-slate-50 p-12 mt-4">
                {/* <TokenList tokens={tokenBalances?.tokens || []} /> */}
            </div>
        </div>
        );
    }
