import { MenuCategory } from "../components/MenuCategory";
import { WhatsAppButton } from "../components/WhatsappButton";
import { LocationButton } from "../components/LocationButton";
import { Header } from "../components/layout/Header";
import { menus } from "../data";
import { config } from "../config";
import { Footer } from "../components/layout/Footer";
import { themes } from "../theme/themes";

export const MenuPage = () => {
  const currentMenu = menus[config.clientId];
  const themeClass = themes[config.theme];

  return (
    <div className={`menu-theme ${themeClass} min-h-screen relative`}>
      <Header
        name={config.clientName}
        description={config.description}
        // image="/shahroz-khan-food-3203448_1280.jpg"
      />

      <main className="max-w-2xl mx-auto px-4 pt-8 pb-24">
        {currentMenu.map((category) => (
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
