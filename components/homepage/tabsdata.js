import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Heart } from 'lucide-react';

const TabsData = ({filteredSubjects,savedSubjects}) => {
  return (
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
  )
}

export default TabsData