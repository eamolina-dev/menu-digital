import { useState } from "react";
import type { ThemeKey } from "./theme/themes";

type Props = {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
};

export default function ThemeDropdown({ theme, setTheme }: Props) {
  const [open, setOpen] = useState(false);

  const changeTheme = (t: ThemeKey) => {
    setTheme(t);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((o) => !o)}
        className="floating-btn flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm"
      >
        🎨 Tema
        <svg
          className="w-4 h-4 opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-lg border floating-btn">
          <button
            onClick={() => changeTheme("light")}
            className="w-full text-left px-4 py-2 hover:opacity-80"
          >
            🌤️ Claro
          </button>

          <button
            onClick={() => changeTheme("dark")}
            className="w-full text-left px-4 py-2 hover:opacity-80"
          >
            🌙 Oscuro
          </button>

          <button
            onClick={() => changeTheme("bold")}
            className="w-full text-left px-4 py-2 hover:opacity-80"
          >
            ☁️ Sky
          </button>

          <button
            onClick={() => changeTheme("bold")}
            className="w-full text-left px-4 py-2 hover:opacity-80"
          >
            🔥 Bold
          </button>
        </div>
      )}
    </div>
  );
}
