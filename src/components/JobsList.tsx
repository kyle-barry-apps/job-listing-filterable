import { useState } from "react"
import { Job } from "../models/Job"
import JobListing from "./JobListing"

interface Props {
  jobData: Job[]
}

const JobsList:React.FC<Props> = ({ jobData }) => {
  const [filters, setFilters] = useState<string[]>([])

  const jobDataFiltered = jobData.filter((job) => {
    let jobFilterOptions: string[] = [job.role, job.level].concat(job.tools).concat(job.languages)

    if (filters.length > 0 ) {
      if (filters.every((filter) => jobFilterOptions.includes(filter))) {
        return job
        }
      } else {
        return job
      }
  })

  const handleFilterRemoval = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter))
  }

  return (
    <main className="job-list-container">
      {filters.length > 0 && 
      <div className="filter-container">
        <div className="job-filters-container">
          {filters.map((filter) => (
            <div className="filter-box">
             <span className="filter">{filter}</span>
             <div className="remove-icon-container" onClick={() => handleFilterRemoval(filter)}>
              <img className="remove-icon" src="/images/icon-remove.svg" alt="remove icon" />
             </div>
            </div>
          ))}
        </div> 
        <span className="clear-filter" onClick={() => setFilters([])}>Clear</span>
      </div>}
      {jobDataFiltered.map((job) => (
        <JobListing key={job.id} job={job} setFilters={setFilters} filters={filters}/>
      ))}
    </main>
  )
}

export default JobsList