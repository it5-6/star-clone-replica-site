import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    title: "VAV Box Systems",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Advanced Variable Air Volume systems for efficient building climate control"
  },
  {
    title: "Air Handling Units",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-performance air handling units for commercial and industrial applications"
  },
  {
    title: "Ductwork Components",
    image: "https://images.unsplash.com/photo-1558618047-dd0c81b5b6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium quality ductwork and fittings for HVAC systems"
  },
  {
    title: "Control Systems",
    image: "https://images.unsplash.com/photo-1558618047-dd0c81b5b6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Smart building automation and control solutions"
  }
];

const ProductsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            HIGHLIGHTED PRODUCTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top MEP system accessories in Vietnam
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;