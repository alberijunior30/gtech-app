import barber from "@/assets/barber.png";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 items-center gap-14">
        <div className="flex flex-col gap-6">
          <p className="uppercase text-primary font-bold">
            Agendamento online
          </p>
          <h1 className="text-5xl font-bold">
            Seu horário marcado em poucos cliques.
          </h1>
          <p className="text-lg text-muted-foreground">
            Escolha o serviço, o barbeiro e o horário que cabe na sua agenda.
            Sem ligação, sem fila de espera.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className={cn(buttonVariants(), "h-12 px-6 text-base")}
            >
              Agendar horário
            </Link>
            <a
              href="#servicos"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 px-6 text-base",
              )}
            >
              Ver serviços
            </a>
          </div>
        </div>

        <img
          className="w-full aspect-4/3 object-cover rounded-3xl"
          src={barber}
          alt="Interior da barbearia"
        />
      </div>
    </section>
  );
}
