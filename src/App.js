import react from "react"
import Navbar from "./components/navbar"
import Journal from "./components/journal"
import Footer from "./components/Footer"
import data from "./data"
import "./style.css"

export default function App(){
  const journals = data.map(item => {
    return (
         < Journal 
            key={item.id}
            item={item}
        />
    )
  })
  return (
    <>
    <Navbar />
    <section>{journals}</section>
    <Footer />
    </>
  )
}