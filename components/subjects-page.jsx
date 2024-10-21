'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Moon, Sun, Heart } from 'lucide-react';
import Link from 'next/link'

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

export function SubjectsPage() {
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
    (<div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div
        className="bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-900 min-h-screen transition-colors duration-300">
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Curriculum Cult</h1>
            <nav className="flex items-center space-x-4">
              <ul className="flex space-x-4">
                <li><a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
                <li><a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
                <li><a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
              </ul>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
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
                  <SelectItem value="">All Semesters</SelectItem>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
                    <SelectItem key={semester} value={semester.toString()}>
                      Semester {semester}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>

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

        <footer className="bg-gray-100 dark:bg-gray-800 mt-12">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-gray-600 dark:text-gray-300">&copy; 2023 Curriculum Cult. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>)
  );
}