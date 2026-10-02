import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/components/layouts/Header";
import { HeroSection } from "@/features/home/HeroSection";
import { HowItWorksSection } from "@/features/home/HowItWorksSection";
export function Home(){

    return (
        <>
        <Header
            actions={
            <>
                <Link>Serviços</Link>
                <Link>Equipe</Link>
                <Link>Contatos</Link>
                <Link to="/login"className={cn(buttonVariants(),"bg-green-500 hover:bg-green-600 p-5",)}>Entrar</Link>
            </>
            }/>

            <HeroSection/>
            <HowItWorksSection/>
            </>

    );
}
