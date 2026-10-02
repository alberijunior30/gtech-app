import Logo from "@/assets/images.png";

export function Header({actions}) {
  return (
    <header className="bg-[#19212b] shadow-xl/30 text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="rounded-full size-15" src={Logo} alt="Logo do Sistema" />
          <span className="text-xl font-bold uppercase leading-none">[nome da sua barbearia aqui]</span>
        </div>
        <div className="flex items-center gap-4">{actions}</div>
      </div>
    </header>
  );
}
