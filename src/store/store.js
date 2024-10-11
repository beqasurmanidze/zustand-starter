import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  isCardOpen: false,

  toggleCart: () => set((state) => ({ isCardOpen: !state.isCardOpen })),
  addItem: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }),

  clearCart: () => set({ cart: [] }),
}));
export default useCartStore;
