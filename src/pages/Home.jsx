import { useEffect, useState } from "react";
import Section from "../components/Section";

const API_URL = import.meta.env.VITE_API_URL || "https://fakestoreapi.com/products";

const categories = [
  { name: "electronics", title: "Eletrônicos" },
  { name: "men's clothing", title: "Roupas" },
  { name: "jewelery", title: "Joias" }
];

export default function Home() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      const results = {};
      for (const cat of categories) {
        const res = await fetch(`${API_URL}/category/${cat.name}`);
        results[cat.name] = await res.json();
      }
      setProducts(results);
    }
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Bem-vindo ao Fiap Commerce!</h2>
      {categories.map(cat => (
        <Section
          key={cat.name}
          title={cat.title}
          subtitle="Produtos em destaque"
          products={products[cat.name] || []}
        />
      ))}
    </div>
  );
}
