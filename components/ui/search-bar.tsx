import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
  return (
    <div className="flex rounded-full border border-[#506178] p-1">
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
  )
}
