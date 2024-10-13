import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Cards from "./components/Cards/Cards"
import Cooks from "./components/Cooks/Cooks"
import Header from "./components/Header/Header"
import Title from "./components/Title/Title"


function App() {

  const [cooks, setCooks] = useState([]);
  const [cooking, setCooking] = useState([]);

  const handleCook = (card) =>{
    
    const isExist = cooks.find(item => item.card.recipe_id == card.card.recipe_id);
    
    if(!isExist){
      setCooks([...cooks,card]);
    }else{
      alert('Already Exist')
    }

  }

  const handleCooking = (cook) => {
    const isExist = cooking.find(item => item.cook.card.recipe_id == cook.cook.card.recipe_id);

    if(!isExist){
      setCooking([...cooking, cook]);
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
        <div className="max-w-[90%] xl:max-w-6xl mx-auto lg:flex justify-between items-start gap-10 pb-16">
          <Cards handleCook={handleCook}></Cards>
          <Cooks cooks={cooks} handleCooking={handleCooking} cooking={cooking}></Cooks>
        </div>
      </main>


    </>
  )
}

export default App
