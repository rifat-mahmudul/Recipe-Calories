import { useEffect, useState } from 'react'
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Cards = ({handleCook}) => {

    const [cards, setCards] = useState([]);

    useEffect(()=>{
    
    fetch('../../../public/Data.json')
    .then(res => res.json())
    .then(data => setCards(data.recipes))

    }, [])

    return (
        <div>
        
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>

                {
                    cards.map((card, index) => <Card key={index} card={card} handleCook={handleCook}></Card>)
                }

            </div>

        </div>
    )
};

Cards.propTypes = {
    handleCook : PropTypes.func,
}

export default Cards;
