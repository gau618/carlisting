import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/header/header'
import Landingpage from "./pages/page1/landingpage"
import { Footer } from "./components/Footor/Footer"
import Buypage from "./pages/page3/Buypage"
import ListingPage from "./pages/page2/ListingPage"
import { CarProvider } from "./contextAPI"
import Chatbot from "./pages/chatbotpage/chatbot"
import './App.css'

function App() {


  return (
   <>
   <CarProvider>
   <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/Listing/:id" element={<ListingPage/>}/>
      <Route path="/Buy/:id" element={<Buypage/>}/>
      <Route path="/Chatbot" element={<Chatbot/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </CarProvider>
   </>
  )
}

export default App
