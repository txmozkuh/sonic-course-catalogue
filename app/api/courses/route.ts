import courses from '@/data.json'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  let results = [...courses]

  const search = searchParams.get('search')
  const level = searchParams.get('level')
  const sort = searchParams.get('sort')

  if (search) {
    results = results.filter((course) => course.title.toLowerCase().includes(search.toLowerCase()))
  }

  if (level) {
    results = results.filter((course) => level.includes(course.level))
  }

  if (sort === 'title') {
    results.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sort === 'level') {
    results.sort((a, b) => a.level.localeCompare(b.level))
  }

  return NextResponse.json(results)
}
