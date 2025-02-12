import {
  createBrowserRouter,
  RouterProvider, // used to tell react, that which router should be used when we hit different urls
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",                    // "path","element", "children" and "errorElement" are the props
    element: <RootLayout />,      // Now <RootLayout /> is the parent route and <HomePage /> & <ProductsPage /> are now children route
    errorElement: <ErrorPage/>,
    children: [                   // "children" prop takes an array of more route defination


      { index: true, element: <HomePage /> },
      //             OR / Alternatively
      //   { path: "", element: <HomePage /> },                       // this is relative path
      { path: "products", element: <ProductsPage /> },                       // this is relative path
      { path: 'products/:productId', element: <ProductDetailPage/> }  // ':' is very important                                    // this is relative path
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />; // "router" is a special prop
}

export default App;



// if a route starts with '/' => then it's a absolute path, always seen after the domain name
// if there is no '/' => then it's a relative path


// if we have a child route with relative path, then REACT will router will take a look at path of parent route and append to child route path