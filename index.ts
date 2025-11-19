export interface Product{
    id: number;
    name:string;
    price:number;
    oldPrice?:number;
    image:string;
    category: string;
    description?: string;
    rating?: number;
    inStock: boolean;
}

export interface CartItem extends Product{
    quantity: number;
}

export interface User{
    id:number;
    email:string;
    name:string;
    avatar?: string;
    address?: Address;
}

export interface Address{
    id:number;
    label:string;
    street:string;
    city:string;
    state:string;
    zipCode:string;
    country:string;
    isDefault:boolean;
}

export interface Order{
    id:number;
    userId: number;
    items:CartItem[];
    total:number;
    status:OrderStatus;
    createdAt:Date;
    deliveryAdress: Address;
}

export enum OrderStatus{
    PLACED ='Order Placed',
    PENDING ='Pending',
    CONFIRMED ='Confirmed',
    PROCESSING = 'Processing',
    DELIVERED = 'Delivered'
}

export interface Category{
    id: number;
    name:string;
    icon: string;
}

export interface Review{
     id:number;
     userId:number;
     userName:string;
     userAvatar:string;
     rating:number;
     comment:string;
     createdAt:Date;
}

export type RootStackParamList = {
    Splash: undefined;
    Onboarding: undefined;
    Auth: undefined;
    Main: undefined;
    ProductDetail: { productId: number};
    Checkout: undefined;
    OrderTracking:{orderId: number};
}

export type MainTabParamList = {
    Home: undefined;
    Search: undefined;
    Cart: undefined;
    Favourite: undefined;
    Profile: undefined;
};

export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    updateQuantity: (productId: number,quantity: number)=> void;
    clearCart: () => void;
    getCartTotal: () => number;
    getCartItemCount: () => number;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email:string, password:string) => Promise<AuthResponse>;
    register : (email: string, password: string, name: string) => Promise<AuthResponse>;
    logout: ()=> void;
    updateProfile: (data: Partial<User>) => void;
}

export interface AuthResponse {
    success: boolean;
    user?: User;
    error?: string;
}

export interface ApiResponse<T> {
    success:boolean;
    data?: T;
    error?: string;
    message?: string;
}

export interface PaginateResponse<T>{
    data: T[];
    page: number;
    totalPages: number;
    totalItems: number;
}