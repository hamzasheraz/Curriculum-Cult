import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart } from 'lucide-react';
import Link from 'next/link'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import SubjectExplorer from '@/components/homepage/subjectexplorer'

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
  const [selectedSemester, setSelectedSemester] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [savedSubjects, setSavedSubjects] = useState([])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const filteredSubjects = subjects.filter(subject => 
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSemester === "" || subject.semesters.includes(parseInt(selectedSemester))))

  const toggleSavedSubject = (subjectId) => {
    setSavedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId])
  }

  return (
    (<div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div
        className="bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-900 min-h-screen transition-colors duration-300">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="container mx-auto px-4 py-8 flex-grow">
          <SubjectExplorer searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester}/>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All Subjects</TabsTrigger>
              <TabsTrigger value="saved">Saved Subjects</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredSubjects.map((subject) => (
                  <Card
                    key={subject.id}
                    className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-700">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Link href={`/subject/${subject.id}`} className="block">
                          <h3
                            className="text-xl font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                            {subject.name}
                          </h3>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleSavedSubject(subject.id)}
                          aria-label={savedSubjects.includes(subject.id) ? "Remove from saved" : "Save subject"}>
                          {savedSubjects.includes(subject.id) ? (
                            <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
                          ) : (
                            <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                          )}
                        </Button>
                      </div>
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="saved">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subjects.filter(subject => savedSubjects.includes(subject.id)).map((subject) => (
                  <Card
                    key={subject.id}
                    className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-700">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Link href={`/subject/${subject.id}`} className="block">
                          <h3
                            className="text-xl font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                            {subject.name}
                          </h3>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleSavedSubject(subject.id)}
                          aria-label="Remove from saved">
                          <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
                        </Button>
                      </div>
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <Footer/>
    </div>)
  );
}