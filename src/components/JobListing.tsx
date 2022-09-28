import { Job } from '../models/Job'

interface Props {
  job: Job,
  setFilters: React.Dispatch<React.SetStateAction<string[]>>,
  filters: string[]
}

const JobListing:React.FC<Props> = ({ job, setFilters, filters }) => {

  let jobFilters: string[] = [job.role, job.level].concat(job.tools).concat(job.languages)

  const handleFilterToggle = (jobFilter: string) => {
    
    if(filters.includes(jobFilter)) {
      setFilters(filters.filter((filter) => filter !== jobFilter))
    } else {
      setFilters([...filters, jobFilter])
    }
  }

  return (
    <div className={`${job.featured ? 'job-listing featured' : 'job-listing'}`}>
      <img src={job.logo.slice(1)} alt="" className='job-listing-img'/>
      <div className='job-listing-details-filter-container'>
        <div className='job-listing-details-container'>
          <div className='company-new-featured-container'>
            <span className='job-listing-company'>{job.company}</span>
            { job.new ?
            <div className='job-listing-new'>
              <span>New!</span>
            </div> : null
            }
            {job.featured ?
            <div className='job-listing-featured'>
              <span>Featured</span>
            </div> : null
            }
            </div> 
          <div className='job-listing-position'>{job.position}</div> 
          <div className='job-listing-time-location'>
            <span>{job.postedAt} &#8226;</span>
            <span>{job.contract} &#8226;</span>
            <span>{job.location}</span>
            </div> 
        </div>
        <div className='filter-options'>
          {jobFilters.map((jobFilter) => (
            <div key={jobFilter} className='job-filter' onClick={() => handleFilterToggle(jobFilter)}>
              <span>{jobFilter}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobListing