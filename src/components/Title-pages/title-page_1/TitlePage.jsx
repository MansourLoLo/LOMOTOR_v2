import React from 'react'
import "./TitlePage.css"

export default function TitlePage({pretitle, title, paragraph}) {
  return (
    <div>
      <div className="Brand-title-container">
        <h4>{pretitle}</h4>
        <h1>{title}</h1>
        <p>
          {paragraph}
        </p>
      </div>
    </div>
  )
}
