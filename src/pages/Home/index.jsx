import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/components/layouts/Header";
export function Home(){

    return (
        <Header actions={<Link to="/login" className={cn(buttonVariants(), "bg-green-500 hover:bg-green-600 p-5")}>Entrar</Link>}/>
    );
}
