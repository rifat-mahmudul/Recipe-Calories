import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Cards from "./components/Cards/Cards"
import Cooks from "./components/Cooks/Cooks"
import Header from "./components/Header/Header"
import Title from "./components/Title/Title"
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [cooks, setCooks] = useState([]);

  const handleCook = (card) =>{
    
    const isExist = cooks.find(item => item.card.recipe_id == card.card.recipe_id);
    
    if(!isExist){
      setCooks([...cooks,card]);
    }else{
      alert('Already Exist')
    }
  

  }

  return (
    <>
      
      <header>
        <Header></Header>
      </header>


      <main>
        <Banner></Banner>
        <Title></Title>
        <div className="max-w-[90%] xl:max-w-6xl mx-auto md:flex justify-between items-start gap-10 pb-16">
          <Cards handleCook={handleCook}></Cards>
          <Cooks cooks={cooks}></Cooks>
        </div>
      </main>


    </>
  )
}

export default App
