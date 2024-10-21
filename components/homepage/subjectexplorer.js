import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search} from 'lucide-react';

const SubjectExplorer = ({searchTerm,setSearchTerm,selectedSemester,setSelectedSemester}) => {
  return (
    <section className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Explore Subjects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Discover and manage your academic journey</p>
            <div className="flex justify-center gap-4 flex-wrap">
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
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem >All Semesters</SelectItem>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
                    <SelectItem key={semester} value={semester.toString()}>
                      Semester {semester}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>
  )
}

export default SubjectExplorer