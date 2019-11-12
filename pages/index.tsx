import React from 'react'
import Layout from '../components/Layout'
import IconSpan from '../components/IconSpan'
import CatchPhrase from '../components/CatchPhrase'
import * as contact from '../data/contact'
import * as common from '../data/common'
import skillset from '../data/skillset'

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <div className="row">
        <div className="col" style={{ height: "200px" }}>

        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <h1 style={{ textTransform: "uppercase", fontWeight: 800 }}>
            { common.name }
          </h1>
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
        <div className="col text-center">
          <h2><strong>Skills</strong></h2>
          <p>
            <span style={{ fontWeight: 800 }}>{ skillset.technical.confident.join(", ") }</span>
            <span className="d-sm-none d-inline" >, </span>
            <br className="d-sm-inline d-none" />
            <span style={{ fontWeight: 500 }}>{ skillset.technical.knowledgeable.join(", ") }</span>
            <span className="d-sm-none d-inline" >, </span>
            <br className="d-sm-inline d-none" />
            <span className="opacity-50">{ skillset.technical.experiencing.join(", ") }</span>
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <a className="btn btn-dark" href="resume">
            <h2 style={{ transform: "translateY(0.1rem)" }}>Learn More</h2>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Index