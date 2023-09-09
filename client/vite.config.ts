import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // default: 'localhost'
  },
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: "/src/",
      },
      {
        find: "store/",
        replacement: "/src/redux/actions/",
      }
    ],
  },
});
