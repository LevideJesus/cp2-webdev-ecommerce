import CardProducts from "../components/CardProducts";

export default function Section({ title, subtitle, products }) {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <CardProducts
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating?.rate}
          />
        ))}
      </div>
    </section>
  );
}
