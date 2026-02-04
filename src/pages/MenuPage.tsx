import { MenuCategory } from "../components/MenuCategory";
import { WhatsAppButton } from "../components/WhatsappButton";
import { LocationButton } from "../components/LocationButton";
import { Header } from "../components/layout/Header";
import { menus } from "../data";
import { config } from "../config";
import { Footer } from "../components/layout/Footer";
import { themes } from "../theme/themes";
import { CategoryFilter } from "../components/CategoryFilter";
import { useState } from "react";

export const MenuPage = () => {
  const currentMenu = menus[config.clientId];
  const themeClass = themes[config.theme];
  const [search, setSearch] = useState("");

  const filteredMenu = currentMenu
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className={`menu-theme ${themeClass} min-h-screen relative`}>
      <Header
        name={config.clientName}
        description={config.description}
        image="/shahroz-khan-food-3203448_1280.jpg"
      />

      <CategoryFilter
        categories={currentMenu.map((c) => ({ id: c.id, title: c.title }))}
      />

      <main className="max-w-2xl mx-auto px-4 pt-8 pb-24">
        <div className="max-w-2xl mx-auto px-4 pt-6">
          <input
            type="text"
            placeholder="Buscar plato..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 mb-8 rounded-xl border shadow-sm focus:outline-none focus:ring"
          />
        </div>

        {filteredMenu.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </main>

      <Footer />

      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <WhatsAppButton phone={config.phoneNumber} />
        <LocationButton address={config.address} />
      </div>
    </div>
  );
};
