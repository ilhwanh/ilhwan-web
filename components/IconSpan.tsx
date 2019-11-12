import * as React from 'react'

const IconSpan: React.FunctionComponent<{ icon: string }> = ({ children, icon }) => (
  <span>
    <i className="material-icons mr-2" style={{ fontSize: "1.2rem", transform: "translateY(0.25rem)" }}>{ icon }</i>
    { children }
  </span>
)

export default IconSpan