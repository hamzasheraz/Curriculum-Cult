import { TabsContent } from "@/components/ui/tabs"
import SubjectCard from "../subject/subjectcard";

const TabsData = ({ tab, filteredSubjects, savedSubjects, toggleSavedSubject }) => {
    return (
        <TabsContent value={tab}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredSubjects.map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} savedSubjects={savedSubjects} toggleSavedSubject={toggleSavedSubject} />
                ))}
            </div>
        </TabsContent>
    )
}

export default TabsData