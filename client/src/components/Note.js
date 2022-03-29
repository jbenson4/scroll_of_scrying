import React from 'react'

const Note = (props) => {
  const { title, date, content } = props;
  return (
    <article>
      <h2>{title}</h2>
      <span>{date}</span>
      <p>
        {content}
      </p>
    </article>
  )
}

export default Note