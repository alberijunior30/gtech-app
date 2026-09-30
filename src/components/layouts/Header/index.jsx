import Logo from "@/assets/images.png";

export function Header({actions}) {
  return (
    <header className="grid grid-cols-3 items-center bg-[#19212b] p-3 shadow-xl/30 text-white">
      <img className="rounded-full size-15" src={Logo} alt="Logo do Sistema" />
      <h1 className="text-xl font-bold text-center uppercase">nome da sua barbearia aqui</h1>
      <div className="justify-self-end">{actions}</div>
    </header>
  );
}
