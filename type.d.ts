export interface ProductsDataType {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: Number;
    price: number;
    description: string;
    category: string;
    image: string;
    brand: string;
}

export interface StoreProductType {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: Number;
    price: number;
    description: string;
    category: string;
    image: string;
    brand: string;
    quantity: number;
}

export interface InitialStateType {
    userCartData: StoreProductType[];
    userFavoritesData: StoreProductType[];
    allProducts: StoreProductType[];
    userInformation: null | string;
}

export interface StateType {
    userCartData: StoreProductType[];
    userFavoritesData: StoreProductType[];
    allProducts: StoreProductType[];
    userInformation: null | string;
    product: any;
}
