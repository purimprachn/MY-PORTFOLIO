import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// เปลี่ยน 'MY-PORTFOLIO' เป็นชื่อ repo ของแครอท
export default defineConfig({
  plugins: [react()],
  base: "/", 
  server:{
    open:true,
  }
});
