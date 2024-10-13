import "../app/globals.css"
import Head from "./head";

export const metadata = {
  title: "LachlanlochDev 😎",
  description: "My personal portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head/>
      <body>
        {children}
      </body>
    </html>
  );
}
