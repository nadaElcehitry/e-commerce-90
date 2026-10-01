import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Navbar from "./_LayoutPages/Navbar/page";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast"
import SessionProviderWrapper from "./_LayoutPages/SessionProviderWrapper/SessionProviderWrapper";
import Footer from "./_LayoutPages/Footer/page";
import { CartContextProvider } from "@/context/cartContext";
import { WhishListContextProvider } from "@/context/whishlistContext";
import { getServerSession } from "next-auth";
import { authOption } from "@/next-auth/authOptions";
const ExoFont = Exo({
  variable: "--font-Exo",
  weight: ['100', '500', '700']
});



export const metadata: Metadata = {
  title: "Fresh-cart",
  description: "Discover a wide range of products at Fresh-cart, including fresh groceries, electronics, trendy fashion, and much more. Shop quality items with fast delivery.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const session = await getServerSession(authOption)
  return (
    <html
      lang="en" className={cn("h-full", "antialiased", ExoFont.className, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <SessionProviderWrapper mySession = {session}>

          <CartContextProvider>
            <WhishListContextProvider>
              <Navbar />
              {children}

              <Toaster />
              <Footer />

            </WhishListContextProvider>

          </CartContextProvider>
        </SessionProviderWrapper>




      </body>

    </html>
  );
}
