
import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, getCartItemsCount, wishlist } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const cartItemsCount = getCartItemsCount();
  const wishlistCount = wishlist.length;

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
  

<Link to="/" className="flex items-center space-x-2">
  <img 
    src="https://www.hatsoffaccessories.com/cdn/shop/files/logo-new-1_2.png?v=1739292837&width=400" 
    alt="Hatsoff Logo" 
    className="h-10 w-auto"  // Adjust height as you want
  />
  
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-black transition-colors">
              Products
            </Link>
            <Link to="/craftsmanship" className="text-gray-800 hover:text-black transition-colors">
              Craftsmanship
            </Link>
            <Link to="/rakhi-offers" className="text-gray-800 hover:text-black transition-colors">
              Rakhi Offers
            </Link>
            <Link to="/customize-bags" className="text-gray-800 hover:text-black transition-colors">
              Customize Bags
            </Link>
            {user?.isAdmin && (
              <Link to="/admin" className="text-gray-800 hover:text-black transition-colors">
                Admin
              </Link>
            )}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer transition-colors" />
              
              <Link to="/wishlist" className="relative">
                <Heart className="w-5 h-5 text-gray-600 hover:text-black transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-black transition-colors" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {user ? (
                <div className="relative group">
                  <User className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      {user.name || user.email}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <User className="w-5 h-5 text-gray-600 hover:text-black transition-colors" />
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8"
            >
              <div className="flex flex-col space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-800 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-800 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/craftsmanship"
                className="block px-3 py-2 text-gray-800 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Craftsmanship
              </Link>
              <Link
                to="/rakhi-offers"
                className="block px-3 py-2 text-gray-800 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rakhi Offers
              </Link>
              <Link
                to="/customize-bags"
                className="block px-3 py-2 text-gray-800 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Customize Bags
              </Link>
              {user?.isAdmin && (
                <Link
                  to="/admin"
                  className="block px-3 py-2 text-gray-800 hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
              <div className="flex items-center space-x-4 px-3 py-2 border-t">
                <Link to="/wishlist" className="relative" onClick={() => setIsMenuOpen(false)}>
                  <Heart className="w-5 h-5 text-gray-600" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <Link to="/cart" className="relative" onClick={() => setIsMenuOpen(false)}>
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
                {user ? (
                  <button onClick={handleLogout} className="text-gray-600 text-sm">
                    Logout
                  </button>
                ) : (
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <User className="w-5 h-5 text-gray-600" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
