import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./routes"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Background from "./components/Background"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
      <Footer />
      <Background />
    </BrowserRouter> 
  )
}