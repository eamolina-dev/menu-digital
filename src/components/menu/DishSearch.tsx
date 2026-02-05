import type { Dispatch, SetStateAction } from "react";

type Props = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const DishSearch = ({ search, setSearch }: Props) => {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-6">
      <input
        type="text"
        placeholder="Buscar plato..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 mb-8 rounded-xl border shadow-sm focus:outline-none focus:ring"
      />
    </div>
  );
};
