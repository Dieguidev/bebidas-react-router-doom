import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import { DrinkCard } from "../components/DrinkCard";

export const IndexPage = () => {
  const { drinks } = useAppStore();

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasDrinks ? (
        <>
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </>
      ) : (
        <>
          <p className="my-10 text-center text-2xl">
            No hay resultados aún, utiliza el formulario para buscar recetas
          </p>
        </>
      )}
    </>
  );
};
