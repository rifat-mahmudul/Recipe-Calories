import PropTypes from 'prop-types'
import Cook from '../Cook/Cook'
import Cooking from '../Cooking/Cooking';

const Cooks = ({cooks, handleCooking, cooking}) => {

    return (
        <div className='sm:w-[50%] border-2 shadow-xl p-4 mt-10 lg:mt-0 rounded-lg'>

            <h1 className='text-center font-bold text-2xl border-b pb-3'>Want to Cook {cooks.length}</h1>

            <table>
                
                    <thead>
                        <tr className='flex gap-7 text-gray-500 mt-4 text-center'>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                
            </table>

            <div>
                {
                    cooks.map((cook, index) => <Cook key={index} cook={cook} handleCooking = {handleCooking} cooking = {cooking}></Cook>)
                }
            </div>

            <h1 className='text-center font-bold text-2xl border-b pb-3 mt-10'>Currently cooking {cooking.length}</h1>

            <table>
                
                    <thead>
                        <tr className='flex gap-7 text-gray-500 mt-4'>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                
            </table>

            <div>
                {
                    cooking.map((item, index) => <Cooking key={index} cooking={item}></Cooking>)
                }
            </div>


            

        </div>
    )
}

Cooks.propTypes = {
    cooks : PropTypes.array,
    handleCooking : PropTypes.func,
    cooking : PropTypes.array
}

export default Cooks
