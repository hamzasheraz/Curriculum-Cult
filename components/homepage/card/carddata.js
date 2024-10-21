import Link from 'next/link'
import {CardContent } from "@/components/ui/card"
import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button"
import SemesterCard from "../semester/semestercard"

const CardData = ({subject,savedSubjects,toggleSavedSubject}) => {
  return (
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
   <SemesterCard subject={subject} />
  </CardContent>
  )
}

export default CardData