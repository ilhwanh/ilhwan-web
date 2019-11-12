import * as React from 'react'
import { Work } from '../data/works'
import * as common from '../data/common'
import IconSpan from './IconSpan'

export const WorkExperience: React.FunctionComponent<Work & { last: boolean }> = (props) => (
  <div>
    <p>
      <span><strong>{ props.title }</strong></span>
      <span>{ props.position ? ", ": "" }{ props.position }</span>
      <span className="opacity-50"> ({ common.formatPeriod(props.period[0], props.period[1]) })</span>
    </p>
    { props.jobs.map((job, i) => <span key={`job-${i}`}>
      <p className="text-justify">
        <strong>{ job.subject }</strong>
        <span> </span>
        {
          job.stack.map((s, j) => <span key={`stack-${j}`} className="mr-1 badge badge-dark badge-outline-dark">{ s }</span>)
        }
        <span className="opacity-75"> { job.contents }</span>
      </p>
    </span>) }
    <hr className={`mb-4 mt-4 ${props.last ? "d-none" : ""}`} style={{ width: "25%", borderTop: "1px dashed rgba(0, 0, 0, 0.1)" }} />
  </div>
)

export const WorkExperienceSummary: React.FunctionComponent<Work> = (props) => (
  <div>
    <p>
      <span><strong>{ props.title }</strong></span>
      <span>{ props.position ? ", ": "" }{ props.position }</span>
      <span className="opacity-50"> ({ common.formatPeriod(props.period[0], props.period[1]) })</span>
    </p>
    <div className="ml-sm-3 mb-3">
      <div>
        <IconSpan icon="layers">
        {
          Array.from(
            props.jobs
              .map(job => new Set(job.stack))
              .reduce((a, b) => {
                const c = new Set(b)
                a.forEach(it => c.add(it))
                return c
              })
          )
          .map((s, i) => <span key={`stack-${i}`} className="mr-1 badge badge-dark badge-outline-dark">{ s }</span>)
        }
        </IconSpan>
      </div>
      { props.jobs.map((work, i) => <div key={`work-${i}`}><IconSpan icon="remove">{ work.subject }</IconSpan></div>) }
    </div>
  </div>
)