import { createSlice } from "@reduxjs/toolkit";
import { StoreProductType, InitialStateType } from "../../type";

const initialState: InitialStateType = {
    userCartData: [],
    userFavoritesData: [],
    allProducts: [],
    userInformation: null,
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
            const existingProduct = state.userFavoritesData.find(
                (product: StoreProductType) => {
                    return product._id === action.payload._id;
                }
            );
            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.userFavoritesData.find(
                (product: StoreProductType) => {
                    return product._id === action.payload._id;
                }
            );
            if (existingProduct?.quantity === 1) {
                existingProduct.quantity = 1;
            } else {
                existingProduct!.quantity--;
            }
        },
        deleteProduct: (state, action) => {
            const existingProduct = state.userCartData.find((product: StoreProductType) => {
                return product._id !== action.payload._id;
            });
        },
        restCart: (state) => {
            state.userCartData = [];
        },
        addUser: (state, action) => {
            state.userInformation = action.payload;
        },
        removeUser: (state) => {
            state.userInformation = null;
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
    addUser,
    removeUser,
    setAllProducts,
    restCart,
    deleteProduct,
} = productSlice.actions;
export default productSlice.reducer;
