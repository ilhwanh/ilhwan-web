import * as React from 'react'
import { Project } from '../data/projects'
import IconSpan from './IconSpan'

const PersonalProject: React.FunctionComponent<Project> = (props) => (
  <div>
    <p>
      <span><strong>{ props.title }</strong></span>
      {
        props.git
          ? <a className="ml-1" href={ props.git } target="_blank">
            <img className="inline-image" src="/images/github-mark-64px.png"/>
            </a>
          : <span />
      }
      {
        props.link
          ? <a className="ml-1 text-dark" href={ props.link } target="_blank">
            <i className="material-icons" style={{ transform: "translateY(0.22em)" }}>web</i>
            </a>
          : <span />
      }
    </p>
    <div className="ml-sm-3 mb-3">
      <div>
        <IconSpan icon="layers">
        {
          props.stack.map((s, i) => <span key={`stack-${i}`} className="mr-1 badge badge-dark badge-outline-dark">{ s }</span>)
        }
        </IconSpan>
      </div>
      { props.description.map((d, i) => <div key={`description-${i}`}><IconSpan icon="remove">{ d }</IconSpan></div>) }
    </div>

  </div>
)

export default PersonalProject