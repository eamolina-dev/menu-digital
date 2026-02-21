import { useEffect, useState } from "react";
import { fetchItems, deleteItem } from "../../api/menuItems";
import type { MenuItem } from "../../types/menu";

type Props = {
  clientId: number;
  token: string;
};

export default function MenuList({ clientId, token }: Props) {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    load();
  }, [clientId]);

  const load = async () => {
    const res = await fetchItems(token, clientId);
    setItems(res.data);
  };

  const handleDelete = async (id: number) => {
    await deleteItem(token, id);

    // optimista (no re-fetch)
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex px-4 py-2 text-xs uppercase tracking-wider text-zinc-500">
        <div className="w-44">Plato</div>
        <div className="flex-1">Descripción</div>
        <div className="w-24">Precio</div>
        <div className="w-32">Categoría</div>
        <div className="w-20">Acciones</div>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors"
        >
          <div className="w-44 font-medium text-zinc-100">{item.name}</div>

          <div className="flex-1 text-sm text-zinc-400 truncate">
            {item.description || "Sin descripción"}
          </div>

          <div className="w-24 text-zinc-200 font-medium">${item.price}</div>

          <div className="w-32 text-sm text-zinc-400">
            {item.category?.title || "Sin categoría"}
          </div>

          <div className="flex gap-2">
            <button className="px-2 py-1 text-sm rounded-md bg-zinc-700 hover:bg-zinc-600">
              ✏
            </button>

            <button
              onClick={() => handleDelete(item.id)}
              className="px-2 py-1 text-sm rounded-md bg-red-900/40 hover:bg-red-900/70 text-red-300"
            >
              🗑
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
