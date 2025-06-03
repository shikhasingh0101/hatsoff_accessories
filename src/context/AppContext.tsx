
import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  featured: boolean;
  inStock: boolean;
  isRakhiSpecial?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

interface AppState {
  user: any;
  cart: CartItem[];
  wishlist: Product[];
  products: Product[];
}

interface AppContextType extends AppState {
  login: (user: any) => void;
  logout: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  setProducts: (products: Product[]) => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

type Action =
  | { type: 'LOGIN'; payload: any }
  | { type: 'LOGOUT' }
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number }
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'LOAD_STORED_DATA'; payload: Partial<AppState> };

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'ADD_TO_WISHLIST':
      if (state.wishlist.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
      };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'LOAD_STORED_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const initialState: AppState = {
  user: null,
  cart: [],
  wishlist: [],
  products: [],
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const storedCart = localStorage.getItem('hatsoff-cart');
    const storedWishlist = localStorage.getItem('hatsoff-wishlist');
    const storedUser = localStorage.getItem('hatsoff-user');

    if (storedCart || storedWishlist || storedUser) {
      dispatch({
        type: 'LOAD_STORED_DATA',
        payload: {
          cart: storedCart ? JSON.parse(storedCart) : [],
          wishlist: storedWishlist ? JSON.parse(storedWishlist) : [],
          user: storedUser ? JSON.parse(storedUser) : null,
        },
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('hatsoff-cart', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem('hatsoff-wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem('hatsoff-user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('hatsoff-user');
    }
  }, [state.user]);

  const login = (user: any) => {
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const addToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromWishlist = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const setProducts = (products: Product[]) => {
    dispatch({ type: 'SET_PRODUCTS', payload: products });
  };

  const getCartTotal = () => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        login,
        logout,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        addToWishlist,
        removeFromWishlist,
        setProducts,
        getCartTotal,
        getCartItemsCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
