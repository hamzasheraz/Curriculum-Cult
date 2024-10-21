import CardData from '../card/carddata';
import { Card } from "@/components/ui/card"

const SubjectCard = ({ subject, savedSubjects, toggleSavedSubject }) => {
  return (
    <Card
      key={subject.id}
      className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-700">
      <CardData subject={subject} savedSubjects={savedSubjects} toggleSavedSubject={toggleSavedSubject} />
    </Card>
  )
}

export default SubjectCard