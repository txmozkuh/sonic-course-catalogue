export interface Course {
  title: string
  description: string
  level: CourseLevel
}

export enum CourseLevel {
  Beginner = 'Beginner',
  Intermidate = 'Intermidate',
  Advanced = 'Advanced',
}
