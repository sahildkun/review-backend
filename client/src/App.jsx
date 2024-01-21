import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutocompleteComponent from './components/AutoCompleteComponent'
import {  RouterProvider, createBrowserRouter} from 'react-router-dom';
import Avatar from './components/Avatar'
import Post from './components/Post'
import PostLoading from './components/PostLoading'
import Posts from './components/Posts'
import Sunny from './components/Sunny'
import Rain from './components/Rain'
import ReviewForm from './components/ReviewForm'
import Navbar from './components/Navbar'
import Register from './components/Register'
import LoginForm from './components/LoginForm'
import Form from './components/Form'
import Loader from './components/Loader'
import NewCourse from './components/createNewCourse'
import axios from 'axios'
import Navbar2 from './components/Navbar2'
import { useEffect } from 'react'
import { AuthContext } from './context/auth-context'
import { useCallback } from 'react'


// fetch('/api/v1/test').then( (res) => res.json()).then((data) => console.log(data));

const router = createBrowserRouter([
  {
    path: '/',
    element:<Navbar2/>,
    children: [  
      {
        index: true,
        element:(
          <div className='flex flex-col h-96'>
    
            <AutocompleteComponent/>
    
          </div>
        ),
      },
      {
        path:'add-course',
        element: <Form/>
      }
    ]
  },
  {
    path: '/register',
    element: (
      <Register />
    )
  },
  
  {
    path: '/login',
    element: (
      <LoginForm />
    )
  },
  {
    path: '/posts/:id',
    element: (
      <Posts />
    )
  },
  {
    path: '/reviewform/:id',
    element: (
      <ReviewForm />
    )
  },
]);

function App() {

  const [islogged, setIslogged] = useState(false);
  const logIn = useCallback (() => {setIslogged(true)},[])
  const logOut = useCallback (() => {setIslogged(false)},[])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

 

  console.log('sahil');

  return (
    <AuthContext.Provider value={{islogged: islogged, logIn:logIn,logOut:logOut} } >
     <RouterProvider  router={router}/>
     </AuthContext.Provider>
    )
}

export default App
