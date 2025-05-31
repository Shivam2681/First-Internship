import { type Internship } from '../types'

export async function fetchInternships() {
  try {
    const response = await fetch('https://internshala.com/hiring/search')
    if (!response.ok) {
      throw new Error('Failed to fetch internships')
    }
    const data = await response.json()

    console.log(data);
    
    // Extract internship IDs and metadata
    const internshipIds = data.internship_ids || []
    const internshipsMeta = data.internships_meta || {}
    
    // Transform the data into our expected format
    const internships = internshipIds
      .map((id: string) => {
        const meta = internshipsMeta[id]
        if (!meta) return null
        
        return {
          id: meta.id,
          title: meta.title,
          company_name: meta.company_name,
          company_logo: meta.company_logo,
          location_names: meta.location_names || [],
          start_date: meta.start_date,
          duration: meta.duration,
          stipend: {
            salary: meta.stipend?.salary || 'Not disclosed',
            salaryValue1: meta.stipend?.salaryValue1 || null,
            salaryValue2: meta.stipend?.salaryValue2 || null,
            currency: meta.stipend?.currency || 'INR',
            scale: meta.stipend?.scale || 'month'
          },
          work_from_home: meta.work_from_home || false,
          labels_app_in_card: meta.labels_app_in_card || [],
          posted_by_label: meta.posted_by_label,
          ppo_salary: meta.ppo_salary,
          ppo_label_value: meta.ppo_label_value,
          part_time: meta.part_time || false,
          profile_name: meta.profile_name || ''
        }
      })
      .filter(Boolean) as Internship[]

    return internships
  } catch (error) {
    console.error('Error fetching internships:', error)
    throw error
  }
}