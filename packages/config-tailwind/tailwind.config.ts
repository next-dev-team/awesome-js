import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

const getColor = (color: any, baseIndex = 500) => ({
  ...color,
  DEFAULT: color[baseIndex],
});

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      colors: {
        default: {
          ...getColor(colors.gray),
          DEFAULT: colors.gray[200],
        },
        primary: getColor(colors.amber),
        secondary: { ...getColor(colors.gray), 700: colors.gray[400] },
        success: getColor(colors.green),
        error: getColor(colors.red),
        warning: getColor(colors.orange),
        info: getColor(colors.sky),
      },
    },
  },
  plugins: [],
};
export default config;

