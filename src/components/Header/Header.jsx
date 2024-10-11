import { FaRegUserCircle } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
    return (
        <div>
        
            <header className="top-0 sticky z-50 backdrop-blur-lg">
                <nav className="max-w-[90%] xl:max-w-6xl mx-auto flex justify-between items-center py-4">
                    <div>
                        <h1 className="lg:text-3xl text-xl font-extrabold">Recipe Calories</h1>
                    </div>

                    <div className="hidden lg:block">
                        <ul className="lg:flex gap-7 text-xl font-semibold">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#home">Recipes</a></li>
                            <li><a href="#home">About</a></li>
                            <li><a href="#home">Search</a></li>
                        </ul>
                    </div>


                    <div className="flex gap-2 items-center">
                        <input type="text" placeholder="Search" className="border border-black p-2 rounded-md text-xl hidden lg:block" />
                        <FaRegUserCircle className="text-3xl text-[#0be58a] font-bold hidden lg:block" />
                    </div>


                    <div className="lg:hidden">
                        <CiMenuFries className="font-extrabold text-xl" />
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Header;

