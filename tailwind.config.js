/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: ({ opacityValue }) =>
          opacityValue
            ? `rgb(var(--color-bg) / ${opacityValue})`
            : `rgb(var(--color-bg))`,

        surface: ({ opacityValue }) =>
          opacityValue
            ? `rgb(var(--color-surface) / ${opacityValue})`
            : `rgb(var(--color-surface))`,

        primary: ({ opacityValue }) =>
          opacityValue
            ? `rgb(var(--color-primary) / ${opacityValue})`
            : `rgb(var(--color-primary))`,

        text: ({ opacityValue }) =>
          opacityValue
            ? `rgb(var(--color-text) / ${opacityValue})`
            : `rgb(var(--color-text))`,

        muted: ({ opacityValue }) =>
          opacityValue
            ? `rgb(var(--color-muted) / ${opacityValue})`
            : `rgb(var(--color-muted))`,

        border: ({ opacityValue }) =>
          opacityValue
            ? `rgb(var(--color-border) / ${opacityValue})`
            : `rgb(var(--color-border))`,
      },
    },
  },
  plugins: [],
};
