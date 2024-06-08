import { HomeLayout } from "@/components/layout/home/homeLayout";
import { IRouteProps } from "@/interfaces/routes/route";
import { CreateProduct } from "@/Pages/home/createProduct/CreateProduct";
import { FirstPage } from "@/Pages/home/firstPage/FirstPage";
import { ProductDetails } from "@/Pages/home/productDetails/ProductDetails";
import { Products } from "@/Pages/home/products/Products";



export const HomesRoutes : IRouteProps={
    path:'/',
    element: HomeLayout,
    visibility:'public',
    children:[
       {
            path:'/home',
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
    ],
};