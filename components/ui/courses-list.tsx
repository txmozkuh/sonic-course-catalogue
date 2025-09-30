'use client'
import CourseCard from '@/components/ui/course-card'
import React, { useEffect, useState } from 'react'
import { Course, CourseLevel } from '@/types/data'

interface CourseListProps {
  className?: string
  searchParams: {
    search?: string
    level?: CourseLevel[]
    sort?: string
  }
}

export default function CourseList({ className, searchParams }: CourseListProps) {
  const [courses, setCourses] = useState<Course[]>([])
  const { search, level, sort } = searchParams
  useEffect(() => {
    const params = new URLSearchParams()
    if (search) params.append('search', search)
    if (level) params.append('level', level.join(','))
    if (sort) params.append('sort', sort)

    fetch(`/api/courses?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [search, level, sort])

  return (
    <>
      {courses.length !== 0 ? (
        courses.map((item) => {
          return (
            <div className={className} key={item.title}>
              <CourseCard {...item} />
            </div>
          )
        })
      ) : (
        <div className="text-muted-foreground col-span-full text-center text-lg">
          No course available
        </div>
      )}
    </>
  )
}
