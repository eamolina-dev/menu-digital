import type { MenuCategoryProps } from "./menuData";

export const laPalmera: MenuCategoryProps[] = [
  {
    id: "pizzas",
    title: "Pizzas",
    items: [
      {
        id: "1",
        name: "Muzzarella",
        description: "Salsa de tomate, muzzarella y aceitunas",
        price: 8500,
        image: "/riquebeze-pizza-5311269_1280.jpg",
      },
      {
        id: "2",
        name: "Especial",
        description: "Salsa de tomate, muzzarella, jamón y morrones",
        price: 9200,
        // image: "/",
      },
      {
        id: "3",
        name: "Napolitana",
        description: "Salsa de tomate, muzzarella, rodajas de tomate fresco, ajo y orégano",
        price: 9200,
        // image: "/",

      },
      {
        id: "4",
        name: "Anchoas",
        description: "Salsa de tomate, muzzarella y anchoas",
        price: 9200,
        image: "/engin_akyurt-pizza-5661748_1280.jpg",

      },
      {
        id: "5",
        name: "Atún y cebolla",
        description: "Salsa de tomate, muzzarella, atún y cebolla",
        price: 9200,
      },
      {
        id: "6",
        name: "Rúcula y jamón crudo",
        description: "Muzzarella, jamón crudo, rúcula fresca y oliva",
        price: 9200,
        image: "/alberthbq-pizza-1815498_1280.jpg",
      },
      {
        id: "7",
        name: "Rúcula y cherry",
        description: "Muzzarella, rúcula fresca, tomates cherry y oliva",
        price: 9200,
      },
      {
        id: "8",
        name: "Rúcula y mortadela",
        description: "Muzzarella, mortadela, rúcula fresca y oliva",
        price: 9200,
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      {
        id: "coca-15",
        name: "Coca-Cola 1.5L",
        price: 3500,
      },
      {
        id: "coca-lata",
        name: "Coca-Cola lata",
        price: 1800,
      },
      {
        id: "sprite-15",
        name: "Sprite 1.5L",
        price: 3500,
      },
      {
        id: "agua",
        name: "Agua mineral",
        price: 1600,
      },
    ],
  },
];
