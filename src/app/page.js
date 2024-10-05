import Book from "@/components/Book/Book";
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
    </main>
  );
}
