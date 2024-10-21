import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const SemesterSelect = ({ selectedSemester, setSelectedSemester }) => {
    console.log(selectedSemester);
    return (
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
    )
}

export default SemesterSelect