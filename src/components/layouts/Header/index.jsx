import Logo from "@/assets/images.png";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export function Header({links = [],actions}) {


  return (
    <header className="bg-[#19212b] shadow-xl/30 text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="rounded-full size-10 md:size-15" src={Logo} alt="Logo do Sistema" />
          <span className="text-sm md:text-xl font-bold uppercase leading-none">[nome da sua barbearia aqui]</span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link)=>(<a key={link.href} href={link.href}>{link.Label}</a>))}
          </nav>
          {actions}
          <button aria-label="Abrir menu" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}><Menu/></button>
        </div>
      </div>
    </header>
  );
}
