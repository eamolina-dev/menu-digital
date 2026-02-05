import type { MenuCategoryProps } from "./menuData";

export const demoBistroMenu: MenuCategoryProps[] = [
  {
    id: "entradas",
    title: "Entradas",
    items: [
      {
        id: 1,
        name: "Bruschettas Mediterráneas",
        description: "Pan tostado, tomate fresco, albahaca y oliva",
        price: 4800,
        image: "/images/bruschetta.jpg",
      },
      {
        id: 2,
        name: "Bastones de Muzzarella",
        description: "Rebozados, crocantes, con salsa de tomate casera",
        price: 5200,
        image: "/images/mozzasticks.jpg",
      },
      {
        id: 3,
        name: "Empanaditas de Carne Cortada a Cuchillo",
        price: 4500,
      },
    ],
  },
  {
    id: "principales",
    title: "Platos Principales",
    items: [
      {
        id: 4,
        name: "Milanesa Bistró",
        description: "Muzzarella, tomates asados y rúcula fresca",
        price: 10900,
        image: "/images/milanesa.jpg",
      },
      {
        id: 5,
        name: "Pasta Casera del Día",
        description: "Salsa a elección: fileto, crema o pesto",
        price: 9800,
      },
      {
        id: 6,
        name: "Hamburguesa Gourmet",
        description: "Carne 180g, cheddar, panceta y cebolla caramelizada",
        price: 11500,
        image: "/images/burger.jpg",
      },
      {
        id: 7,
        name: "Ensalada Tibia de Pollo",
        description: "Hojas verdes, pollo grillado, croutons y aderezo miel-mostaza",
        price: 8900,
      },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzas Artesanales",
    items: [
      {
        id: 8,
        name: "Clásica Muzzarella",
        description: "Salsa de tomate, muzzarella y aceitunas",
        price: 8500,
        image: "/images/pizza-muzza.jpg",
      },
      {
        id: 9,
        name: "Napolitana",
        description: "Muzzarella, tomate en rodajas, ajo y orégano",
        price: 9200,
      },
      {
        id: 10,
        name: "Rúcula y Jamón Crudo",
        description: "Base de muzza, rúcula fresca y jamón crudo",
        price: 10500,
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    items: [
      {
        id: 11,
        name: "Brownie con Helado",
        description: "Brownie tibio de chocolate con bocha de vainilla",
        price: 5200,
        image: "/images/brownie.jpg",
      },
      {
        id: 12,
        name: "Cheesecake de Frutos Rojos",
        price: 5600,
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      {
        id: 13,
        name: "Limonada Casera",
        description: "Con menta y jengibre",
        price: 3500,
      },
      {
        id: 14,
        name: "Gaseosa 1.5L",
        price: 3800,
      },
      {
        id: 15,
        name: "Cerveza Artesanal",
        description: "Rubia o roja",
        price: 4200,
      },
    ],
  },
];
