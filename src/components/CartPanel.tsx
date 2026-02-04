import { useEffect, useState } from "react";
import { useCart } from "../cart/CartContext";
import { config } from "../config";

export const CartPanel = () => {
  const { cart, totalPrice, removeFromCart, clearCart } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openCart = () => setOpen(true);
    window.addEventListener("open-cart", openCart);
    return () => window.removeEventListener("open-cart", openCart);
  }, []);

  if (!open) return null;

  const message = encodeURIComponent(
    `Hola! Quiero pedir:\n\n${cart
      .map((i) => `${i.qty}x ${i.name}`)
      .join("\n")}\n\nTotal: $${totalPrice}`
  );

  const url = `https://wa.me/${config.phoneNumber}?text=${message}`;

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex justify-center items-end"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-t-3xl p-6 space-y-4 max-h-[80vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold">Tu pedido</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <span>
              {item.qty}x {item.name}
            </span>
            <button onClick={() => removeFromCart(item.id)}>➖</button>
          </div>
        ))}

        <div className="font-semibold">Total: ${totalPrice}</div>

        {cart.length > 0 ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={clearCart}
            className="block text-center py-3 rounded-xl bg-green-600 text-white font-semibold"
          >
            Enviar pedido por WhatsApp
          </a>
        ) : (
          <button
            disabled
            className="block w-full text-center py-3 rounded-xl bg-gray-300 text-gray-500 font-semibold cursor-not-allowed"
          >
            El carrito está vacío
          </button>
        )}

        <button onClick={clearCart} className="text-sm underline">
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};
