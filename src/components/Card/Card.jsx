import { FaRegClock } from "react-icons/fa6";
import { PiBowlFood } from "react-icons/pi";
import PropTypes from 'prop-types'

const Card = ({card}) => {

    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = card;

    return (
        <div className="border-2">
        
            <img className='h-[200px] w-[200px]' src={recipe_image} alt="" />
            <h3 className='font-bold mt-3 mb-3 text-xl'>{recipe_name}</h3>
            <p className='text-gray-500'>{short_description}</p>
            <h2 className='font-bold mt-5 text-xl'>Ingredients {ingredients.length}</h2>
            <ul>
                <li className='list-decimal'>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
            </ul>

            <div className='flex gap-5 mt-4'>
                <h4 className="flex gap-2 items-center"><FaRegClock /> {preparing_time} minutes</h4>
                <h4 className="flex gap-2 items-center"><PiBowlFood /> {calories} calories</h4>
            </div>

            <button className="bg-[#0be58a] hover:bg-[#17aa6d] transition-[0.5s] py-3 px-5 rounded-3xl font-bold mt-3 mb-5">Want to Cook</button>
        </div>
    )
}

Card.propTypes = {
    card : PropTypes.object,
    recipe_name: PropTypes.string,
    recipe_image : PropTypes.string
}

export default Card;
