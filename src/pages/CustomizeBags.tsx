
import React, { useState } from 'react';

const CustomizeBags = () => {
  const [formData, setFormData] = useState({
    bagType: '',
    size: '',
    color: '',
    leather: '',
    engraving: '',
    engravingPosition: '',
    hardwareColor: '',
    lining: '',
    additionalFeatures: [],
    customerName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeatureChange = (feature: string) => {
    setFormData({
      ...formData,
      additionalFeatures: formData.additionalFeatures.includes(feature)
        ? formData.additionalFeatures.filter(f => f !== feature)
        : [...formData.additionalFeatures, feature],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Custom bag request:', formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your custom bag request. Our artisans will review your specifications 
            and contact you within 2-3 business days with a detailed quote and timeline.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors mr-4"
          >
            Submit Another Request
          </button>
          <a
            href="/"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&h=400&fit=crop"
          alt="Custom Italian Leather Bags"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Italian Leather Bags</h1>
            <p className="text-xl">Design your perfect bag with premium materials and expert craftsmanship</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Your Unique Masterpiece</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our master craftsmen will create a one-of-a-kind leather bag tailored to your exact specifications. 
            Choose from premium Italian leather, hardware options, personalized engraving, and more to design 
            a piece that's uniquely yours.
          </p>
        </div>

        {/* Custom Order Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-8">Customization Details</h3>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Bag Type and Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bag Type</label>
                <select
                  name="bagType"
                  value={formData.bagType}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select bag type</option>
                  <option value="handbag">Handbag</option>
                  <option value="tote">Tote Bag</option>
                  <option value="crossbody">Crossbody Bag</option>
                  <option value="clutch">Clutch</option>
                  <option value="backpack">Backpack</option>
                  <option value="briefcase">Briefcase</option>
                  <option value="messenger">Messenger Bag</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="xl">Extra Large</option>
                  <option value="custom">Custom Dimensions</option>
                </select>
              </div>
            </div>

            {/* Leather and Color */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Leather Type</label>
                <select
                  name="leather"
                  value={formData.leather}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select leather type</option>
                  <option value="full-grain">Full Grain Italian (Premium)</option>
                  <option value="top-grain">Top Grain Italian</option>
                  <option value="nappa">Nappa Leather (Soft)</option>
                  <option value="pebbled">Pebbled Leather</option>
                  <option value="patent">Patent Leather</option>
                  <option value="suede">Italian Suede</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select color</option>
                  <option value="black">Classic Black</option>
                  <option value="brown">Rich Brown</option>
                  <option value="tan">Tan</option>
                  <option value="cognac">Cognac</option>
                  <option value="navy">Navy Blue</option>
                  <option value="burgundy">Burgundy</option>
                  <option value="gray">Gray</option>
                  <option value="white">White</option>
                  <option value="custom">Custom Color (specify in notes)</option>
                </select>
              </div>
            </div>

            {/* Hardware and Lining */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hardware Color</label>
                <select
                  name="hardwareColor"
                  value={formData.hardwareColor}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select hardware color</option>
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                  <option value="gunmetal">Gunmetal</option>
                  <option value="rose-gold">Rose Gold</option>
                  <option value="antique-brass">Antique Brass</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lining</label>
                <select
                  name="lining"
                  value={formData.lining}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select lining</option>
                  <option value="cotton">Premium Cotton</option>
                  <option value="silk">Silk</option>
                  <option value="leather">Matching Leather</option>
                  <option value="microfiber">Microfiber</option>
                  <option value="alcantara">Alcantara</option>
                </select>
              </div>
            </div>

            {/* Engraving */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Engraving Text (Optional)
                </label>
                <input
                  type="text"
                  name="engraving"
                  value={formData.engraving}
                  onChange={handleInputChange}
                  placeholder="Enter text for engraving"
                  maxLength={20}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <p className="text-xs text-gray-500 mt-1">Maximum 20 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Engraving Position</label>
                <select
                  name="engravingPosition"
                  value={formData.engravingPosition}
                  onChange={handleInputChange}
                  disabled={!formData.engraving}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
                >
                  <option value="">Select position</option>
                  <option value="front">Front</option>
                  <option value="back">Back</option>
                  <option value="bottom">Bottom</option>
                  <option value="inside">Inside</option>
                </select>
              </div>
            </div>

            {/* Additional Features */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Additional Features</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Detachable Strap',
                  'Interior Pockets',
                  'Laptop Compartment',
                  'RFID Protection',
                  'Lock Closure',
                  'Dust Bag Included',
                ].map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.additionalFeatures.includes(feature)}
                      onChange={() => handleFeatureChange(feature)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Customer Information */}
            <div className="border-t pt-8">
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests or Additional Notes
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={4}
                placeholder="Any special requirements, custom dimensions, or additional details..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold"
              >
                Submit Custom Request
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Our team will review your request and contact you within 2-3 business days with a quote and timeline.
              </p>
            </div>
          </form>
        </div>

        {/* Process Information */}
        <div className="mt-16 bg-gray-900 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Custom Bag Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="font-semibold mb-2">1. Design</h4>
              <p className="text-sm text-gray-300">Submit your custom requirements</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-semibold mb-2">2. Consultation</h4>
              <p className="text-sm text-gray-300">Our team reviews and provides quote</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🛠️</div>
              <h4 className="font-semibold mb-2">3. Crafting</h4>
              <p className="text-sm text-gray-300">Master artisans create your bag</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="font-semibold mb-2">4. Delivery</h4>
              <p className="text-sm text-gray-300">Premium packaging and delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeBags;
