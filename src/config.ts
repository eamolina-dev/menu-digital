import type { MenuKey } from "./data";
import type { ThemeKey } from "./theme/themes";

export const config: {
  clientId: MenuKey;
  theme: ThemeKey;
  clientName: string;
  description: string;
  phoneNumber: string;
  address: string;
  menu: string;
} = {
  clientId: 'laPalmera',
  theme: "green",
  clientName: 'La Palmera',
  description: 'Pizzeria artesanal',
  phoneNumber: '5493584382061',
  address: 'Capitan Alejo Zalazar 169, Reduccion, Cordoba, Argentina',
  menu: 'laPalmera'
};
