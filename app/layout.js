import "./globals.css";
import "animate.css";
import "../public/ClashDisplay_Complete/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Champion Logistics",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-clash">
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
