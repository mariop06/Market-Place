import { HomeLayout } from "@/components/layout/home/homeLayout";
import { IRouteProps } from "@/interfaces/routes/route";
import { CreateProduct } from "@/Pages/home/createProduct/CreateProduct";
import { FirstPage } from "@/Pages/home/firstPage/FirstPage";
import { ProductDetails } from "@/Pages/home/productDetails/ProductDetails";
import { Products } from "@/Pages/home/products/Products";
import { SellersProfile_User } from "@/Pages/home/sellersProfile_user/SellersProfile_User";
import {  ShoppingBasket } from "@/Pages/home/shoppingBasket/ShoppingBasket";



export const HomesRoutes : IRouteProps={
    path:'/',
    element: HomeLayout,
    visibility:'public',
    children:[
       {
            path:'/shopping',
            element: FirstPage,
            visibility:'public',
        },
        {
            path:'/product',
            element: Products,
            visibility:'public',
        }, 
        {
            path:'/product/details',
            element: ProductDetails,
            visibility:'public',
        },  
        {
            path:'/product/create',
            element: CreateProduct,
            visibility:'public',
        }, 
        {
            path:'/shopping/basket',
            element: ShoppingBasket,
            visibility:'public',
        }, 
        {
            path:'/seller/profile',
            element: SellersProfile_User,
            visibility:'public',
        }, 
    ],
};