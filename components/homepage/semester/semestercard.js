import { Badge } from "@/components/ui/badge"

const SemesterCard = ({subject}) => {
    return (
        <div className="flex flex-wrap gap-2">
            {subject.semesters.map((semester) => (
                <Badge
                    key={semester}
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                    Semester {semester}
                </Badge>
            ))}
        </div>
    )
}

export default SemesterCard