

const Craftsmanship = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen bg-black text-white">

        <img
          src="https://images.pexels.com/photos/4452519/pexels-photo-4452519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Craftsmanship"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Craftsmanship</h1>
            <p className="text-xl">Traditional artisanship meets modern excellence</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Heritage of Excellence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Hatsoff Accessories, we believe that true luxury lies in the details. Each piece in our collection 
            is meticulously crafted by skilled artisans who have perfected their craft over generations. From the 
            selection of premium Italian leather to the final finishing touches, every step reflects our commitment 
            to uncompromising quality.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Material Selection</h3>
            <p className="text-gray-600">
              We source only the finest Italian leather, hand-selected for its grain, texture, and durability. 
              Each hide is carefully inspected to ensure it meets our exacting standards.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Artisan Crafting</h3>
            <p className="text-gray-600">
              Our master craftsmen use traditional techniques passed down through generations, combined with 
              modern precision tools to create products of exceptional quality and beauty.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
            <p className="text-gray-600">
              Every piece undergoes rigorous quality checks before leaving our workshop. We ensure that each 
              product meets our high standards for durability, functionality, and aesthetic appeal.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-black rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Premium Italian Leather</h4>
                  <p className="text-gray-600">
                    Sourced directly from renowned tanneries in Italy, our leather is known for its 
                    superior quality, natural grain patterns, and exceptional aging characteristics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-black rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hand-Stitched Details</h4>
                  <p className="text-gray-600">
                    Every stitch is carefully placed by hand, ensuring not only aesthetic appeal but 
                    also superior durability that will last for years to come.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-black rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Traditional Techniques</h4>
                  <p className="text-gray-600">
                    We preserve time-honored crafting methods while incorporating modern innovations 
                    to create products that honor tradition and embrace the future.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-black rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sustainable Practices</h4>
                  <p className="text-gray-600">
                    We are committed to environmentally responsible practices, using eco-friendly 
                    treatments and supporting sustainable leather production methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-black rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Attention to Detail</h4>
                  <p className="text-gray-600">
                    From the choice of hardware to the finishing of edges, every detail is 
                    meticulously considered and executed to perfection.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-black rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lifetime Quality</h4>
                  <p className="text-gray-600">
                    Our products are designed to age beautifully and last a lifetime, developing 
                    a unique patina that tells the story of their journey with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-lg mb-8 text-gray-300">
            Discover the exceptional quality and craftsmanship that sets our products apart. 
            Each piece tells a story of dedication, skill, and passion for excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Our Collection
            </a>
            <a
              href="/customize-bags"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Custom Orders
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craftsmanship;
