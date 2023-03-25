import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // fragement of the global store => we don't have items in our basket yet.
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // REDUX is kind of an global store(global state management technique)
      // We can split this store into separate slices
      // For example, in this app, we will have basket slice, and restaurant slice
      // Reducer is allow us to modify the global store
      // If the user DISPATCH the action like add to basket to the global store(send the msg up)
      // Redux store catch the msg and modifies the global store
      // In this case, add to basket msg follows the code below:
      // addToBasekt({ item }) appeneded to current items
      // keep the current items in the basket and add item to the end
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // Check the item that user trying to delete. Is in the basket?
      // Is the id that user gave is equivalent to the id in the basket
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // Create copy of the basket(Dev should not manipulat the object itself)
      let newBasket = [...state.items];

      if (index >= 0) {
        // If there is an item, get rid of the item
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }

      // Replace existing basket to new basket
      state.items = newBasket;
    },
    resetBasket: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, incrementByAmount, resetBasket, } =
  basketSlice.actions;

// Selector allow us to access the global store and pull the items from the basket
export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

// Reducer = takes any array and loop through it, makes it into single number whereby all the prices are accumulated
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
