import { createSlice } from "@reduxjs/toolkit";
import { StoreProductType, InitialStateType } from "../../type";

const initialState: InitialStateType = {
    userCartData: [],
    userFavoritesData: [],
    allProducts: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.userCartData.find((product: StoreProductType) => {
                return product._id === action.payload._id;
            });
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.userCartData.push(action.payload);
            }
        },
        addToFavorites: (state, action) => {
            const existingProduct = state.userFavoritesData.find(
                (product: StoreProductType) => {
                    return product._id === action.payload._id;
                }
            );
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.userFavoritesData.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.userCartData.find((product: StoreProductType) => {
                return product._id === action.payload._id;
            });
            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.userCartData.find((product: StoreProductType) => {
                return product._id === action.payload._id;
            });
            if (existingProduct?.quantity === 1) {
                existingProduct.quantity = 1;
            } else {
                existingProduct!.quantity--;
            }
        },
        deleteProduct: (state, action) => {
            state.userCartData = state.userCartData.filter((product: StoreProductType) => {
                return product._id !== action.payload._id;
            });
        },
        deleteFavorite: (state, action) => {
            state.userFavoritesData = state.userFavoritesData.filter(
                (product: StoreProductType) => {
                    return product._id !== action.payload._id;
                }
            );
        },

        restCart: (state) => {
            state.userCartData = [];
        },

        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
    },
});

export const {
    addToCart,
    addToFavorites,
    increaseQuantity,
    decreaseQuantity,
    deleteFavorite,
    setAllProducts,
    restCart,
    deleteProduct,
} = productSlice.actions;
export default productSlice.reducer;
