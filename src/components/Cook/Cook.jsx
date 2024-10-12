import PropTypes from 'prop-types'

const Cook = ({cook}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = cook.card;
    
    return (
        <div>
            
            <table>
                
                    <tbody>
                        <tr className='flex gap-7 text-gray-500 mt-4 text-center bg-gray-200 p-2 items-center rounded-md'>
                            <td className='text-black font-bold'>{recipe_id}</td>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <td><button className='bg-[#0be58a] text-black hover:bg-[#17aa6d] transition-[0.5s] py-2 px-2 rounded-3xl font-bold'>Preparing</button></td>
                        </tr>
                    </tbody>
                
            </table>

        </div>
    )
}

Cook.propTypes = {
    cook : PropTypes.object,
}

export default Cook;
