export function HowItWorksSection(){
  const steps = [
    {titulo: "Escolha o serviço", desc: "Corte, Barba ..."},
    {titulo: "Escolha barbeiro e horário", desc: "Vários horários livres de cada profissional."},
    {titulo: "Confirme", desc: "Pronto, é só aparecer no horário marcado."}
  ]


    return (
      <section className="text-white bg-[#19212b]">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-10">
          <h2 className="font-bold text-center text-3xl">Como funciona</h2>
            <ol className="grid md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <li key={step.titulo} className="flex items-center flex-col text-center gap-3">
                  <span aria-hidden="true" className="flex bg-green-500 size-12 items-center justify-center rounded-full font-bold">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold">{step.titulo}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </li>
              ))}
            </ol>

        </div>
      </section>
    );
}