import React from 'react'

const Rating = ({ value,text }) => {
  return (

    <div className="rating">
      <span style={{
        color: "yellow"
      }}>
        <i className= {
            value >= 1
          ? 'fas fas-star'
          :  value >= 0.5
          ? "fas fa-star-halt-alt"
          : "fas fa-start"
        }
        >
        </i>
      </span>

      <span style={{
        color: "yellow"
      }}>
        <i className= {
            value >= 2
          ? 'fas fas-star'
          :  value >= 1.5
          ? "fas fa-star-halt-alt"
          : "fas fa-start"
        }
        >
        </i>
      </span>

      <span style={{
        color: "yellow"
      }}>
        <i className= {
            value >= 3
          ? 'fas fas-star'
          :  value >= 2.5
          ? "fas fa-star-halt-alt"
          : "fas fa-start"
        }
        >
        </i>
      </span>

      <span style={{
        color: "yellow"
      }}>
        <i className= {
            value >= 4
          ? 'fas fas-star'
          :  value >= 3.5
          ? "fas fa-star-halt-alt"
          : "fas fa-start"
        }
        >
        </i>
      </span>

      <span
        style={{
        color: "yellow"
      }}>
        <i className= {
          value >= 5
          ? 'fas fas-star'
          :  value >= 4.5
          ? "fas fa-star-halt-alt"
          : "fas fa-start"
        }
        >
        </i>
      </span>

          <span
        style={{
        color: "yellow"
      }}>
        <i className= {
          value >= 6
          ? 'fas fas-star'
          :  value >= 5.5
          ? "fas fa-star-halt-alt"
          : "fas fa-start"
        }
        >
        </i>
      </span>

      <span>{
        text && text}
      </span>
    </div>
  )
}

export default Rating