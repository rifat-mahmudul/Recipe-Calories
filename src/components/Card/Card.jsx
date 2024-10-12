import { FaRegClock } from "react-icons/fa6";
import { PiBowlFood } from "react-icons/pi";
import PropTypes from 'prop-types'

const Card = ({card, handleCook}) => {

    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = card;

    return (
        <div className="border-2 p-4 rounded-lg shadow-xl">
        
            <img className='h-[200px] w-full rounded-lg' src={recipe_image} alt="" />
            <h3 className='font-bold mt-3 mb-2 text-xl'>{recipe_name}</h3>
            <p className='text-gray-500'>{short_description}</p>
            <h2 className='font-bold mt-5 text-xl mb-2'>Ingredients {ingredients.length}</h2>
            <ul>
                <li className='list-disc text-gray-500 ml-5'>{ingredients[0]}</li>
                <li className='list-disc text-gray-500 ml-5'>{ingredients[1]}</li>
                <li className='list-disc text-gray-500 ml-5'>{ingredients[2]}</li>
                <li className='list-disc text-gray-500 ml-5'>{ingredients[3]}</li>
            </ul>

            <div className='flex gap-5 mt-4'>
                <h4 className="flex gap-2 items-center"><FaRegClock /> {preparing_time} minutes</h4>
                <h4 className="flex gap-2 items-center"><PiBowlFood /> {calories} calories</h4>
            </div>

            <button onClick={()=> handleCook({card})} className="bg-[#0be58a] border-2 border-black hover:bg-[#17aa6d] transition-[0.5s] py-3 px-5 rounded-3xl font-bold mt-3 mb-5">Want to Cook</button>
        </div>
    )
}

Card.propTypes = {
    handleCook : PropTypes.func,
    card : PropTypes.object,
    recipe_name: PropTypes.string,
    recipe_image : PropTypes.string
}

export default Card;
