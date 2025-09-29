import CourseCard from '@/components/ui/course-card'
import React from 'react'
import coursesData from '@/data.json'
export default function Catalogue() {
  return (
    <div className="bg-background min-h-screen">
      <div className="relative container flex flex-col items-center gap-8 py-6">
        <h1 className="text-5xl font-semibold">Courses Catalogue</h1>
        <div className="grid w-full grid-cols-12">
          <div className="col-span-3 w-full">Filter Section</div>
          <div className="col-span-9 flex w-full flex-col gap-8">
            <div className="">Search bar and Sort </div>
            <div className="grid w-full grid-cols-12 gap-6">
              {coursesData.map((item) => {
                return (
                  <div className="col-span-4" key={item.title}>
                    <CourseCard {...item} />
                  </div>
                )
              })}
            </div>
            <div>Load more</div>
          </div>
        </div>
      </div>
    </div>
  )
}
