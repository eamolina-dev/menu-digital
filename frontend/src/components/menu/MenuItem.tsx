import type { MenuItemProps as MenuItemType } from "../../data/menuData";

type Props = {
  item: MenuItemType;
  showAddButton?: boolean;
};

export const MenuItem = ({ item }: Props) => {
  return (
    <div className="card rounded-2xl shadow-sm overflow-hidden border">
      <div className="flex">
        <div className="p-4 space-y-2 flex-1">
          <div className="flex justify-between items-start gap-2">
            <h3 className="title text-lg font-semibold leading-snug">
              {item.name}
            </h3>

            <span className="price accent text-base font-semibold whitespace-nowrap">
              ${item.price}
            </span>
          </div>

          {item.description && (
            <p className="muted text-sm leading-relaxed">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
