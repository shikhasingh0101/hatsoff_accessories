
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import productsData from '../data/products.json';

const Admin = () => {
  const { user, products, setProducts } = useAppContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('products');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    originalPrice: '',
    image: '',
    description: '',
    featured: false,
    inStock: true,
    isRakhiSpecial: false,
  });

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    setProducts(productsData);
  }, [setProducts]);

  const resetForm = () => {
    setFormData({
      name: '',
      category: '',
      price: '',
      originalPrice: '',
      image: '',
      description: '',
      featured: false,
      inStock: true,
      isRakhiSpecial: false,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Math.max(...products.map(p => p.id)) + 1,
      price: parseFloat(formData.price),
      originalPrice: parseFloat(formData.originalPrice),
    };
    setProducts([...products, newProduct]);
    setShowAddForm(false);
    resetForm();
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      originalPrice: product.originalPrice.toString(),
      image: product.image,
      description: product.description,
      featured: product.featured,
      inStock: product.inStock,
      isRakhiSpecial: product.isRakhiSpecial || false,
    });
  };

  const handleUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct = {
      ...editingProduct,
      ...formData,
      price: parseFloat(formData.price),
      originalPrice: parseFloat(formData.originalPrice),
    };
    setProducts(products.map(p => p.id === editingProduct.id ? updatedProduct : p));
    setEditingProduct(null);
    resetForm();
  };

  const handleDeleteProduct = (productId: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  if (!user || !user.isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your e-commerce store</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'products'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'orders'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'analytics'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'products' && (
              <div>
                {/* Products Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Products Management</h2>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Product</span>
                  </button>
                </div>

                {/* Add/Edit Product Form */}
                {(showAddForm || editingProduct) && (
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">
                      {editingProduct ? 'Edit Product' : 'Add New Product'}
                    </h3>
                    <form onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Product Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        >
                          <option value="">Select Category</option>
                          <option value="shoes">Shoes</option>
                          <option value="handbags">Handbags</option>
                          <option value="wallets">Wallets</option>
                          <option value="rakhi">Rakhi</option>
                          <option value="accessories">Accessories</option>
                        </select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="number"
                          name="price"
                          placeholder="Price"
                          value={formData.price}
                          onChange={handleInputChange}
                          required
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <input
                          type="number"
                          name="originalPrice"
                          placeholder="Original Price"
                          value={formData.originalPrice}
                          onChange={handleInputChange}
                          required
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <input
                        type="url"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                      />

                      <textarea
                        name="description"
                        placeholder="Product Description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                      />

                      <div className="flex space-x-6">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="featured"
                            checked={formData.featured}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          Featured Product
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="inStock"
                            checked={formData.inStock}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          In Stock
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="isRakhiSpecial"
                            checked={formData.isRakhiSpecial}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          Rakhi Special
                        </label>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          {editingProduct ? 'Update Product' : 'Add Product'}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowAddForm(false);
                            setEditingProduct(null);
                            resetForm();
                          }}
                          className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Products Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 object-cover rounded-lg mr-4"
                              />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                <div className="text-sm text-gray-500">{product.description.slice(0, 50)}...</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 capitalize">
                              {product.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ₹{product.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col space-y-1">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                              </span>
                              {product.featured && (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                  Featured
                                </span>
                              )}
                              {product.isRakhiSpecial && (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                  Rakhi Special
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => navigate(`/product/${product.id}`)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleEditProduct(product)}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold mb-4">Orders Management</h2>
                <p className="text-gray-600">Order management functionality would be implemented here.</p>
                <div className="mt-8 bg-gray-100 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Coming Soon</h3>
                  <p className="text-gray-600">
                    This section will include order tracking, status updates, shipping management, and customer communication tools.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold mb-4">Analytics Dashboard</h2>
                <p className="text-gray-600">Analytics and reporting functionality would be implemented here.</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-2">Sales Overview</h3>
                    <p className="text-gray-600">Revenue, orders, and conversion metrics</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-2">Product Performance</h3>
                    <p className="text-gray-600">Best sellers, inventory levels, and trends</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-2">Customer Insights</h3>
                    <p className="text-gray-600">User behavior, demographics, and retention</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
