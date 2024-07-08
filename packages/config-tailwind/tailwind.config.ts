import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

const getColor = (color: any, other = {}, baseIndex = 500) => ({
  ...color,
  DEFAULT: color[baseIndex],
  foreground: colors.gray[100],
  ...other
});

// We want each package to be responsible for its own content.
const config: Omit<Config, "content" | 'safelist'> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        base: '1rem',
        lg: '1.125rem',
      },
      borderRadius: {
        sm: '4px',
        md: '7px',
        lg: '12px',
        none: '0px',
      },
      borderWidth: {
        sm: '1px',
        md: '2px',
        lg: '3px',
      },

      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      colors: {
        default: getColor(colors.gray, {
          DEFAULT: colors.gray[200],
          foreground: colors.gray[600],
        }),
        primary: getColor(colors.amber),
        secondary: getColor(colors.gray),
        success: getColor(colors.green),
        error: getColor(colors.red),
        warning: getColor(colors.orange),
        info: getColor(colors.sky),
        foreground: colors.gray[900],
      },
    },
  },
};
export default config;

