import PropTypes from 'prop-types'
import Cook from '../Cook/Cook'

const Cooks = ({cooks}) => {

    return (
        <div className='sm:w-[50%] border-2 shadow-xl p-4 mt-10 sm:mt-0 rounded-lg'>

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
                    cooks.map((cook, index) => <Cook key={index} cook={cook}></Cook>)
                }
            </div>

            <h1 className='text-center font-bold text-2xl border-b pb-3 mt-10'>Currently cooking</h1>

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


            

        </div>
    )
}

Cooks.propTypes = {
    cooks : PropTypes.array,
}

export default Cooks
