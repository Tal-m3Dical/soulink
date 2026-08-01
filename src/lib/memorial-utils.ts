import type { Gender } from './types'

export function getDedicationText(gender: Gender): string {
  return gender === 'female' ? 'לזכרה של' : 'לזכרו של'
}

export function getBlessingText(gender: Gender): string {
  return gender === 'female' ? 'יהי זכרה ברוך' : 'יהי זכרו ברוך'
}

export function calculateAge(birthYear: number, deathYear: number): number {
  return deathYear - birthYear
}

export function slugify(name: string): string {
  return name
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^֐-׿a-zA-Z0-9-]/g, '')
    .toLowerCase()
}
