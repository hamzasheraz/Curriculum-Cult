import { useState } from 'react'
import { Tabs } from "@/components/ui/tabs"
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import SubjectExplorer from '@/components/homepage/subject/subjectexplorer'
import useDarkMode from '@/hooks/useDarkMode'
import TabsOption from '@/components/homepage/tabs/tabsoption'
import TabsData from '@/components/homepage/tabs/tabsdata'

const subjects = [
  { id: 1, name: "Mathematics", semesters: [1, 2, 3, 4] },
  { id: 2, name: "Physics", semesters: [1, 2, 3] },
  { id: 3, name: "Chemistry", semesters: [1, 2] },
  { id: 4, name: "Biology", semesters: [1, 2] },
  { id: 5, name: "Computer Science", semesters: [3, 4, 5, 6] },
  { id: 6, name: "English Literature", semesters: [1, 2] },
  { id: 7, name: "History", semesters: [3, 4] },
  { id: 8, name: "Geography", semesters: [3, 4] },
  { id: 9, name: "Economics", semesters: [5, 6] },
  { id: 10, name: "Psychology", semesters: [5, 6, 7, 8] },
  { id: 11, name: "Sociology", semesters: [5, 6] },
  { id: 12, name: "Political Science", semesters: [7, 8] },
  { id: 13, name: "Philosophy", semesters: [7, 8] },
  { id: 14, name: "Art History", semesters: [7, 8] },
  { id: 15, name: "Music Theory", semesters: [1, 2] },
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSemester, setSelectedSemester] = useState("all")
  const [darkMode, setDarkMode] = useState(false)
  const [savedSubjects, setSavedSubjects] = useState([])

  useDarkMode(darkMode);

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSemester === "all" || subject.semesters.includes(parseInt(selectedSemester))))

  const toggleSavedSubject = (subjectId) => {
    setSavedSubjects(prev =>
      prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId])
  }

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div
        className="bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-900 min-h-screen transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <SubjectExplorer searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester} />
          <Tabs defaultValue="all" className="mb-12">
            <TabsOption />
            <TabsData tab="all" filteredSubjects={filteredSubjects} savedSubjects={savedSubjects} toggleSavedSubject={toggleSavedSubject} />
            <TabsData tab="saved" filteredSubjects={filteredSubjects} savedSubjects={savedSubjects} toggleSavedSubject={toggleSavedSubject} subjects={subjects} />
          </Tabs>
        </main>
      </div>
      <Footer />
    </div>
  );
}