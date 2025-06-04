
import { useEffect } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';
import productsData from '../data/products.json';

const RakhiOffers = () => {
  const { products, setProducts } = useAppContext();

  useEffect(() => {
    setProducts(productsData);
  }, [setProducts]);

  const rakhiProducts = products.filter(product => product.isRakhiSpecial || product.category === 'rakhi');
  const rakhiEndDate = new Date('2024-08-20T23:59:59');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-85 md:h-75 bg-gradient-to-r from-red-800 to-red-600 text-white">
        <img
          src="https://images.pexels.com/photos/7686386/pexels-photo-7686386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Rakhi Festival"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rakhi Festival Special</h1>
            <p className="text-xl">Celebrate the bond of love with our handcrafted collection</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Countdown Timer */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Limited Time Offer</h2>
            <p className="text-lg text-gray-600">Special prices on our entire Rakhi collection</p>
          </div>
          <div className="max-w-md mx-auto">
            <CountdownTimer targetDate={rakhiEndDate} title="Offer Ends In" />
          </div>
        </div>

        {/* Special Offers Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Rakhi Festival Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2">Free Shipping</h4>
                <p className="text-sm">On all Rakhi orders above ₹999</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2">Up to 30% Off</h4>
                <p className="text-sm">On selected Rakhi products</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2">Gift Wrapping</h4>
                <p className="text-sm">Complimentary premium gift packaging</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Rakhi Tradition */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Sacred Bond of Rakhi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Raksha Bandhan, the festival that celebrates the eternal bond between brothers and sisters, 
              is a time of joy, love, and protection. Our handcrafted rakhi collection honors this sacred 
              tradition with designs that blend contemporary aesthetics with timeless cultural significance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Handcrafted Designs</h3>
              <p className="text-gray-600 text-sm">
                Each rakhi is meticulously handcrafted by skilled artisans using traditional techniques 
                and premium materials.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Packaging</h3>
              <p className="text-gray-600 text-sm">
                Every rakhi comes in beautiful, eco-friendly packaging that adds to the joy of gifting 
                and receiving.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Traditional & Modern</h3>
              <p className="text-gray-600 text-sm">
                Our collection features both traditional motifs and contemporary designs to suit 
                every taste and preference.
              </p>
            </div>
          </div>
        </div>

        {/* Rakhi Products */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rakhi Collection</h2>
            <p className="text-lg text-gray-600">Discover our special rakhi designs and festival accessories</p>
          </div>

          {rakhiProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {rakhiProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No Rakhi products available at the moment.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-lg mb-6">
            Make this Raksha Bandhan extra special with our handcrafted collection. 
            Order now and get free shipping on orders above ₹999.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop All Products
            </a>
            <a
              href="/customize-bags"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Custom Gifts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RakhiOffers;
