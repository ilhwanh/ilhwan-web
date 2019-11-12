import React from 'react'
import Layout from '../components/Layout'
import SectionHeader from '../components/SectionHeader'
import IconSpan from '../components/IconSpan'
import CatchPhrase from '../components/CatchPhrase'
import { WorkExperience, WorkExperienceSummary } from '../components/WorkExperience'
import PersonalProject from '../components/PersonalProject'
import { worksExperiences } from '../data/works'
import { personalProjects } from '../data/projects'
import * as contact from '../data/contact'
import * as common from '../data/common'
import skillset from '../data/skillset'
import educations from '../data/educations'


const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Resume">
      <div className="row" style={{ height: "200px" }}>

      </div>
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-12">
          <h1 style={{ textTransform: "uppercase", fontWeight: 800 }}>
            { common.name }
          </h1>
          <h3 className="text-secondary" style={{ fontWeight: 200 }}>
            { common.position }
          </h3>
        </div>
        <div className="col-xl-3 col-lg-4 col-12 d-flex justify-content-between flex-column" style={{ paddingBottom: "0.5em" }}>
          <IconSpan icon="phone">{ contact.phoneNumber }</IconSpan>
          <IconSpan icon="email">{ contact.email }</IconSpan>
          <IconSpan icon="room">{ contact.address }</IconSpan>
          <IconSpan icon="web">{ contact.webSite }</IconSpan>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <CatchPhrase />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <SectionHeader>Skills</SectionHeader>
          <p>
            <span style={{ fontWeight: 800 }}>{ skillset.technical.confident.join(", ") }</span>
            <span className="d-sm-none d-inline" >, </span>
            <br className="d-sm-inline d-none" />
            <span>{ skillset.technical.knowledgeable.join(", ") }</span>
            <span className="d-sm-none d-inline" >, </span>
            <br className="d-sm-inline d-none" />
            <span className="opacity-50">{ skillset.technical.experiencing.join(", ") }</span>
          </p>
        </div>
        <div className="col-lg-6 col-md-12">
          <hr className="d-lg-none" />
          <SectionHeader>Education</SectionHeader>
          {
            educations.map((education, i) => <p  key={`education-${i}`}>
              <strong>{ education.title }</strong> ({ education.degree })
              <span className="opacity-50">
              { " " }{ common.formatPeriod(education.period[0], education.period[1]) }
              </span>
            </p>)
          }
        </div>
      </div>
      <hr />
      <div className="row" id="work-experience">
        <div className="col">
          <SectionHeader>
            Work Experience
            <span>  </span>
            <button
              className="btn btn-dark badge badge-dark"
              style={{ transform: "scale(0.85) translate(-7.5%, -0.1rem)" }}
              {...{
                "data-target": ".work-experience-collapse",
                "data-toggle": "collapse",
                "aria-expanded": "false",
                "aria-controls": "work-experience-short work-experience-long"
              }}
            >
              <div className="collapse show work-experience-collapse" style={{ transform: "translateY(-0.08rem)" }}>Show detail</div>
              <div className="collapse work-experience-collapse" style={{ transform: "translateY(-0.08rem)" }}>Hide detail</div>
            </button>
          </SectionHeader>
          <div className="collapse show work-experience-collapse" id="work-experience-short">
            { worksExperiences.map((experience, i) => <WorkExperienceSummary key={`experience-${i}`} {...experience} />) }
          </div>
          <div className="collapse work-experience-collapse" id="work-experience-long">
            { worksExperiences.map((experience, i) => <WorkExperience key={`experience-${i}`} last={worksExperiences.length - 1 === i} {...experience} />) }
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <SectionHeader>Personal Project</SectionHeader>
          { personalProjects.map((project, i) => <PersonalProject key={`project-${i}`} {...project} />) }
        </div>
      </div>
    </Layout>
  )
}

export default Index