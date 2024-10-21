import { Button } from "../ui/button"
import { Moon, Sun } from 'lucide-react';

const Navbar = ({darkMode,setDarkMode}) => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Curriculum Cult</h1>
                <nav className="flex items-center space-x-4">
                    {/* <ul className="flex space-x-4">
                <li><a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
                <li><a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
                <li><a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
              </ul> */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle theme">
                        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar