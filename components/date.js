import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return date.toLocaleDateString("en-US", {year:"numeric", month:"short"}) 
}
