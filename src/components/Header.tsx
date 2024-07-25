import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <div>
              <img className="w-32" src="/logo.svg" alt="logotipo" />
            </div>
          </div>

          <nav className="flex gap-4">
            <Link to="/" className="text-white uppercase font-bold">
              Inicio
            </Link>
            <Link to="/favoritos" className="text-white uppercase font-bold">
              Favoritos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
