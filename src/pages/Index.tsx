
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';
import productsData from '../data/products.json';

const Index = () => {
  const { products, setProducts } = useAppContext();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setProducts(productsData);
  }, [setProducts]);

  const featuredProducts = products.filter(product => product.featured);
  const rakhiEndDate = new Date('2024-08-20T23:59:59');

  const heroSlides = [
    {
      image: "https://crm.morettimilano.com/public/uploads/highLightImg2-1728946409.jpg",
      title: "Premium Italian Leather",
      subtitle: "Crafted with Excellence",
      description: "Discover our exclusive collection of handcrafted leather accessories"
    },
    {
      image: "https://images.pexels.com/photos/16823590/pexels-photo-16823590/free-photo-of-elegant-expensive-shoes-wristwatch-and-perfume.jpeg",
      title: "Luxury Footwear",
      subtitle: "Step into Elegance",
      description: "Premium shoes designed for the modern professional"
    },
    {
      image: "https://i.pinimg.com/736x/af/cc/41/afcc4104e861ffb124978e20c68958b4.jpg",
      title: "Rakhi Special Collection",
      subtitle: "Traditional Craftsmanship",
      description: "Celebrate with our handcrafted rakhi collection"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-2">{slide.subtitle}</p>
                <p className="text-lg mb-8">{slide.description}</p>
                <Link
                  to="/products"
                  className="inline-flex items-center bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Rakhi Countdown Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rakhi Festival Special</h2>
            <p className="text-lg text-gray-600">Limited time offer on our traditional rakhi collection</p>
          </div>
          <div className="max-w-md mx-auto">
            <CountdownTimer targetDate={rakhiEndDate} title="Rakhi Offer Ends In" />
          </div>
          <div className="text-center mt-6">
            <Link
              to="/rakhi-offers"
              className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View Rakhi Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Discover our most popular leather accessories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
            <p className="text-lg text-gray-300">Premium quality and personalized experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/craftsmanship"
              className="group bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4">Our Craftsmanship</h3>
              <p className="text-gray-300 mb-4">Learn about our traditional artisanship and attention to detail in every piece we create.</p>
              <div className="flex items-center text-white group-hover:text-gray-200">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/customize-bags"
              className="group bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4">Custom Italian Bags</h3>
              <p className="text-gray-300 mb-4">Design your own personalized bag with premium Italian leather and custom engraving.</p>
              <div className="flex items-center text-white group-hover:text-gray-200">
                <span>Customize Now</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/rakhi-offers"
              className="group bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4">Rakhi Collection</h3>
              <p className="text-gray-300 mb-4">Celebrate the festival of siblings with our handcrafted traditional rakhi designs.</p>
              <div className="flex items-center text-white group-hover:text-gray-200">
                <span>Shop Rakhi</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
