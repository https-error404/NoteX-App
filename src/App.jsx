import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Note from './components/AllNotes'
import ViewNote from './components/ViewNotes'
import Trash from './components/Trash';
import About from './components/About';
import Footer from './components/Footer'
import LoginSignUp from './components/SignIn'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    },

    {
      path: "/notes",
      element:
      <div>
        <Navbar/>
        <Note/>
        <Footer/>
      </div>
    },

    {
      path: "/notes/:id",
      element:
      <div>
        <Navbar/>
        <ViewNote/>
        <Footer/>
      </div>
    },
    {
      path: "/trash",
      element: (
        <div>
          <Navbar />
          <Trash />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <LoginSignUp/>
      ),
    },
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
