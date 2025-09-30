'use client'
import React, { useState } from 'react'
import { ChevronsDown } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import FilterPopover from '@/components/ui/filter-popover'
import SearchBar from '@/components/ui/search-bar'
import CourseList from '@/components/ui/courses-list'
import { CourseLevel } from '@/types/data'

export default function Catalogue() {
  const [search, setSearch] = useState('')
  const [level, setLevel] = useState<CourseLevel[]>([])
  const [sort, setSort] = useState('')
  return (
    <div className="bg-background min-h-screen">
      <div className="relative container flex flex-col items-center gap-8 py-6">
        <h1 className="text-4xl font-semibold md:text-5xl">Courses Catalogue</h1>
        <div className="flex w-full flex-col gap-8">
          {/**Filter bar **/}
          <div className="flex flex-wrap items-center justify-between gap-8">
            <FilterPopover onFilterChange={setLevel} />
            <div className="hidden flex-1 sm:block">
              <SearchBar onSearchChange={setSearch} />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium text-white/50">Sort by</span>
              <Select value={sort} onValueChange={setSort}>
                <div className="rounded-md bg-gradient-to-r from-[#edaa60] via-[#bf5f38] to-[#1753b0] p-[1px]">
                  <SelectTrigger className="w-[100px] rounded-[7px] !border-none !bg-black !text-white !ring-0">
                    <SelectValue placeholder="Options" />
                  </SelectTrigger>
                </div>
                <SelectContent side="bottom">
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="level">Level</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:hidden">
              <SearchBar onSearchChange={setSearch} />
            </div>
          </div>
          <div className="grid w-full grid-cols-12 gap-8">
            <CourseList
              className="col-span-full sm:col-span-6 lg:col-span-4"
              searchParams={{ search, level, sort }}
            />
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
  )
}
