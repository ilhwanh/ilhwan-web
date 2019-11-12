import * as React from 'react'
import * as common from '../data/common'

const CatchPhrase: React.FunctionComponent<{}> = (props) => (
  <div className="w-100 text-center">
    “{ common.catchPhrase.map((p, i) => {
      if (i === 0) {
        return [<span key={`phrase-${i}`} style={{ fontFamily: "'Noto Serif KR', serif", fontStyle: "italic" }}>{ p }</span>]
      }
      else {
        return [
          <span key={`phrase-${i}-0`} className="d-none d-sm-inline"> </span>,
          <br key={`phrase-${i}-1`} className="d-inline d-sm-none" />,
          <span key={`phrase-${i}-2`} style={{ fontFamily: "'Noto Serif KR', serif", fontStyle: "italic" }}>{ p }</span>
        ]
      }
    }) }”
  </div>
)

export default CatchPhrase