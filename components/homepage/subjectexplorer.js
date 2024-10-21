import SearchSubject from "./search"
import SemesterSelect from "./semesterselect"

const SubjectExplorer = ({ searchTerm, setSearchTerm, selectedSemester, setSelectedSemester }) => {
    return (
        <section className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Explore Subjects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Discover and manage your academic journey</p>
            <div className="flex justify-center gap-4 flex-wrap">
                <SearchSubject searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <SemesterSelect selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester} />
            </div>
        </section>
    )
}

export default SubjectExplorer