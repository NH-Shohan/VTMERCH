import Book from "@/components/Book/Book";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Quote from "@/components/Quote/Quote";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Book />
      <Quote />
      <Footer />
    </main>
  );
}
