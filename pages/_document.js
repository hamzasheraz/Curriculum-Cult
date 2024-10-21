import Footer from "@/components/layout/footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
      {/* <div className="flex flex-col min-h-screen">
      <main className="flex-grow"> */}
        <Main />
        <NextScript />
        {/* </main> */}
        {/* <Footer/> */}
        {/* </div> */}
      </body>
    </Html>
  );
}
