import { useEffect, useState } from 'react'
import Card from '../Card/Card';

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(()=>{
    
    fetch('../../../public/Data.json')
    .then(res => res.json())
    .then(data => setCards(data.recipes))

    }, [])

    return (
        <div className='sm:w-[70%] grid grid-cols-2 gap-5 justify-between items-center'>
        
            <div>

                {
                    cards.map((card, index) => <Card key={index} card={card}></Card>)
                }

            </div>

        </div>
    )
}

export default Cards;
