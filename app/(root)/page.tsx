import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Home({
                        searchParams,
                    }: {
    searchParams: { [key: string]: string | undefined };
}) {
    const user = await currentUser();
    if (!user) return null;


    return (
        <>
            <h1 className='head-text text-left'>Home</h1>



        </>
    );
}

export default Home;