import React, { createContext, useReducer, useEffect, useMemo } from "react";
import useLocalStorage from "../lib/useLocalStorage";

export const WishlistDispatchContext = createContext(null);
export const WishlistStateContext = createContext(null);

const initialState = {
  items: [],
};

//create reducer
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
  }
  return state;
};
//
export const WishlistProvider = ({ children }) => {
  const [savedWishlist, saveWishlist] = useLocalStorage(
    "items-wishlist",
    JSON.stringify(initialState)
  );
  const [state, dispatch] = useReducer(reducer, JSON.parse(savedWishlist));

  useEffect(() => {
    saveWishlist(JSON.stringify(state));
  }, [state, saveWishlist]);

  // const addItem = (item) => {
  //   // @ts-ignore  if (!item.id) return;

  //   const isInWishlist = state.items.find((i) => i.id === item.id);

  //   if (isInWishlist) return dispatch({ type: REMOVE_ITEM, payload: item.id });

  //   dispatch({ type: ADD_ITEM, payload: item });
  // };

  // const removeItem = (id) => {
  //   if (!id) return;
  //   // @ts-ignore

  //   // use find method because it finds for the one item that meets the condition
  //   // some will go through the whole array and check all elements even tho the id is already found
  //   dispatch({ type: REMOVE_ITEM, payload: id });
  // };

  const dispatchValue = useMemo(
    () => ({
      addItem: (item) => {
        console.log(
          "🚀 ~ file: wishlist.js ~ line 63 ~ WishlistProvider ~ item",
          item
        );
        // @ts-ignore
        if (!item.id) return;
        dispatch({ type: ADD_ITEM, payload: item });
      },
      removeItem: (id) => {
        if (!id) return;
        // @ts-ignore

        // use find method because it finds for the one item that meets the condition
        // some will go through the whole array and check all elements even tho the id is already found
        dispatch({ type: REMOVE_ITEM, payload: id });
      },
    }),
    []
  );

  const isSaved = (id) => !!state.items.find((item) => item.id === id);

  const hasItems = state.items.length > 0;
  const itemsCount = state.items.length;

  return (
    <WishlistDispatchContext.Provider value={dispatchValue}>
      <WishlistStateContext.Provider
        value={{ items: state.items, isSaved, hasItems, itemsCount }}
      >
        {children}
      </WishlistStateContext.Provider>
    </WishlistDispatchContext.Provider>
  );
};

// create actions
