import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SearchSubject from "./search"

const SubjectExplorer = ({searchTerm,setSearchTerm,selectedSemester,setSelectedSemester}) => {
  return (
    <section className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Explore Subjects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Discover and manage your academic journey</p>
            <div className="flex justify-center gap-4 flex-wrap">
                <SearchSubject searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
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