import type { MenuCategoryProps } from "./menuData";

export const ricardo: MenuCategoryProps[] = [
  {
    id: "minutas",
    title: "Minutas",
    items: [
      { id: 1, name: "Milanesa o suprema", description: "", price: 8900 },
      { id: 2, name: "Escalope a la marinera", description: "", price: 9500 },
      { id: 3, name: "Milanesa o suprema napolitana", description: "", price: 11900 },

      { id: 4, name: "Nuestra Suiza", description: "Salsa blanca, cebolla, muzza, sardo y verdeo", price: 10900 },
      { id: 5, name: "Ricardo", description: "Panceta, morrón, muzza y aceitunas verdes filetadas", price: 12900 },
      { id: 6, name: "Merlina", description: "Muzza, jamón crudo, rúcula, sardo y aceitunas negras", price: 13500 },
      { id: 7, name: "Serrana", description: "Cheddar, panceta, cebolla caramelizada, huevo frito y verdeo", price: 11500 }, // ⚠ Falta precio

      { id: 8, name: "Suprema rellena napolitana", description: "Jamón y queso", price: 11900 },

      { id: 9, name: "Milanesa de costeleta", description: "", price: 9900 },
      { id: 10, name: "Milanesa de costeleta napolitana", description: "", price: 12900 },

      { id: 11, name: "Pollo grille", description: "Pata muslo o pechuga", price: 7900 },
      { id: 12, name: "Pollo grille con salsa", description: "Salsa de champiñón, verdeo o roquefort", price: 11900 },

      { id: 13, name: "Bastones de pollo", description: "", price: 7500 },
      { id: 14, name: "Costeleta de ternera", description: "", price: 9300 },

      { id: 15, name: "Arroz con albóndigas", description: "", price: 7900 },
      { id: 16, name: "Pastel de papas", description: "", price: 7200 }
    ]
  },

  {
    id: "extras",
    title: "Acompañamientos y Extras",
    items: [
      { id: 17, name: "Omelette", description: "", price: 6200 },
      { id: 18, name: "Papas fritas", description: "", price: 6900 },
      { id: 19, name: "Papas con cheddar y panceta", description: "", price: 9900 }
    ]
  },

  {
    id: "sand",
    title: "Sándwiches",
    items: [
      { id: 20, name: "Lomito completo", description: "Lechuga, tomate, huevo, jamón y queso", price: 9500 },
      { id: 21, name: "Bondiola completo", description: "Lechuga, tomate, cheddar, cebolla y barbacoa", price: 9900 },
      { id: 22, name: "Milanesa o suprema completo", description: "Lechuga, tomate, huevo, jamón y queso", price: 9200 },

      { id: 23, name: "Hamburguesa simple", description: "Lechuga y tomate o jamón y queso", price: 8200 },
      { id: 24, name: "Hamburguesa completa", description: "Lechuga, tomate, huevo, jamón y queso", price: 8900 },
      { id: 25, name: "Hamburguesa Ricardo", description: "Cheddar, panceta, lechuga, tomate, huevo, pepino y cebolla", price: 9900 }
    ]
  },

  {
    id: "ensaladas",
    title: "Ensaladas",
    items: [
      { id: 26, name: "Caesar", description: "Mix de verdes, pollo, crutones, sardo y salsa Caesar", price: 8200 },
      { id: 27, name: "Cecilia", description: "Rúcula, tomate, choclo, palmito, kanikama y sardo", price: 9900 },
      { id: 28, name: "De atún", description: "Mix de verdes, atún, cebolla morada, arroz y huevo", price: 8900 }
    ]
  }
];
