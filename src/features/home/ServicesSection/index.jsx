import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";
export function ServicesSection(){
    const services = [
      { serv: "Corte", time: "[duração]", price: "[R$00]" },
      { serv: "Barba", time: "[duração]", price: "[R$00]" },
      { serv: "Corte + barba", time: "[duração]", price: "[R$00]" },
      { serv: "Sobrancelha", time: "[duração]", price: "[R$00]" },
    ];
    return (
      <section className="text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-10">
          <div className="flex flex-col text-center gap-3">
            <h2 className="font-bold text-3xl">Serviços</h2>
            <p className="text-gray-400">
              Preços e duração de cada atendimento.
            </p>
          </div>

          <ol className="grid md:grid-cols-4 gap-6">
            {services.map((service) => (
              <li key={service.serv}>
                <Card className="bg-[#19212b] text-white p-5">
                  <CardTitle className="font-semibold text-lg">{service.serv}</CardTitle>
                  <Badge>{service.time}</Badge>
                  <p className="text-2xl font-bold">{service.price}</p>
                  <Link to="/login"className={cn(buttonVariants(),"bg-green-500 hover:bg-green-600",)}>Agendar</Link>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
}