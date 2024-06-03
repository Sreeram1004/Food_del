import React,{lazy,Suspense, useContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
import ContactUs from './components/ContactUs';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import RestaurentMenu from './components/RestaurentMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appCart';
import Cart from './components/Cart';
const About = lazy(()=>import('./components/About'));


const AppLayout = () =>{
const {loggedInUser} = useContext(UserContext);
const [user,setUser]=useState("hello")
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:user,setUser}}>
        <div>
        <Header />
        <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    );
};
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children: [
            {
                path: "/",
                element : <Body/>
            },
            {
                path: "/about",
                element : <Suspense fallback={<div>
                    <h1>Loading</h1>
                </div>}><About/></Suspense>
            },
            {
                path: "/ContactUs",
                element : <ContactUs/>
            },
            {
                path: "/RestaurentMenu/:resId",
                element : <RestaurentMenu/>
            },
            {
                path: "/Cart",
                element : <Cart/>
            },
        ],
        errorElement : <Error/>
    },
    

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>);
