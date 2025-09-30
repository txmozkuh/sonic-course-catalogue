import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { CourseLevel } from '@/types/data'
import { Filter } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

interface FilterPopoverProps {
  onFilterChange: Dispatch<SetStateAction<CourseLevel[]>>
}
export default function FilterPopover({ onFilterChange }: FilterPopoverProps) {
  return (
    <Popover>
      <div className="rounded-md bg-gradient-to-r from-[#edaa60] via-[#bf5f38] to-[#1753b0] p-[1px]">
        <PopoverTrigger
          asChild
          className="flex items-center justify-center gap-3 rounded-[7px] bg-black px-3 py-1"
        >
          <Button variant={'ghost'}>
            <span>Filter</span>
            <Filter size={15} />
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverContent align="start" side="bottom" className="size-fit">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Level</h3>
            <ToggleGroup
              onValueChange={(e) => onFilterChange(e as CourseLevel[])}
              variant="outline"
              type="multiple"
              className="bg-gradient-to-r from-[#edaa60] via-[#bf5f38] to-[#1753b0]"
            >
              {Object.values(CourseLevel).map((level) => {
                return (
                  <ToggleGroupItem
                    value={level}
                    key={level}
                    className="bg-black px-4 font-semibold data-[state=on]:bg-transparent"
                    aria-label={`Level ${level}`}
                  >
                    {level}
                  </ToggleGroupItem>
                )
              })}
            </ToggleGroup>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant={'outline'} className="rounded-xl">
              Reset
            </Button>
            <Button className="rounded-xl">Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
