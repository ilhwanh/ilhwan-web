import * as React from 'react'

const SectionHeader: React.FunctionComponent<{}> = ({ children }) => (
  <h2 className="mb-4" style={{ textTransform: "uppercase", fontWeight: 800 }}>
    <div className="d-sm-inline-block d-none mr-3" style={{ width: "0.5rem", height: "1.8rem", transform: "translateY(0.2rem)", backgroundColor: "black" }} />
    { children }
  </h2>
)

export default SectionHeader