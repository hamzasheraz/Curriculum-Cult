import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';

const SearchSubject = ({searchTerm,setSearchTerm}) => {
    return (
        <div className="relative w-full max-w-md">
            <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <Input
                type="text"
                placeholder="Search for subjects..."
                className="pl-10 pr-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    )
}

export default SearchSubject;