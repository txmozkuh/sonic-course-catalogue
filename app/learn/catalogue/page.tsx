import CourseCard from '@/components/ui/course-card'
import React from 'react'
import coursesData from '@/data.json'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ChevronsDown, Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
export default function Catalogue() {
  return (
    <div className="bg-background min-h-screen">
      <div className="relative container flex flex-col items-center gap-8 py-6">
        <h1 className="text-5xl font-semibold">Courses Catalogue</h1>
        <div className="grid w-full grid-cols-12 py-4">
          <div className="col-span-3 w-full">Filter Section</div>
          <div className="col-span-9 flex w-full flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="flex flex-1 rounded-full border border-[#506178] p-1">
                <Input
                  type="text"
                  placeholder="What are you looking for"
                  className="text-foreground rounded-full border-none !bg-transparent text-sm !ring-0 placeholder:text-[#506178]"
                />
                <Button
                  className="flex items-center justify-center gap-1 rounded-full !px-4"
                  variant={'outline'}
                  style={{ background: '#F4A462' }}
                >
                  <span className="text-xs">Search</span> <Search size={'15px'} />
                </Button>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-white/50">Sort by</span>
                <Select>
                  <div className="rounded-md bg-gradient-to-r from-[#edaa60] via-[#bf5f38] to-[#1753b0] p-[1px]">
                    <SelectTrigger className="w-[100px] rounded-[7px] !border-none !bg-black !text-white !ring-0">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                  </div>
                  <SelectContent>
                    <SelectItem value="level">Level</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid w-full grid-cols-12 gap-6">
              {coursesData.map((item) => {
                return (
                  <div className="col-span-4" key={item.title}>
                    <CourseCard {...item} />
                  </div>
                )
              })}
            </div>
            <div className="flex w-full items-center justify-center gap-2 overflow-hidden">
              <Separator orientation="horizontal" className="flex-1" />
              <span className="border-border flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm text-white/50">
                Load more
                <ChevronsDown size="15px" />
              </span>
              <Separator orientation="horizontal" className="flex-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
