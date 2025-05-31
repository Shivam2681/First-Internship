export interface Internship {
  id: number
  title: string
  company_name: string
  company_logo: string
  location_names: string[]
  start_date: string
  duration: string
  stipend: {
    salary: string
    salaryValue1: number | null
    salaryValue2: number | null
    currency: string
    scale: string
  }
  work_from_home: boolean
  labels_app_in_card: string[]
  posted_by_label: string
  ppo_salary?: number
  ppo_label_value?: string
  part_time: boolean
  profile_name: string
}