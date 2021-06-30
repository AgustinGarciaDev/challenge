import './css/Home.css'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home'
import { ToastContainer } from 'react-toastify'

const App = () => {

  return (
    <>
      <Home />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </>


  )
}

export default App