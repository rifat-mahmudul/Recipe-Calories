import PropTypes from 'prop-types'

const Cooking = ({cooking}) => {

    const {recipe_id, recipe_name, preparing_time, calories} = cooking.cook.card;
    return (
        <div>
            
            <table>
                
                    <tbody>
                        <tr className='flex gap-7 text-gray-500 mt-4 text-center bg-gray-200 p-2 items-center rounded-md'>
                            <td className='text-black font-bold'>{recipe_id}</td>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                        </tr>
                    </tbody>
                
            </table>

        </div>
    )
}

Cooking.propTypes = {
    cooking : PropTypes.object
}

export default Cooking;
