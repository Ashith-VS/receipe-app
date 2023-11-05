import React, { useState } from 'react'

function Pagination(props) {
  

  let numberOfPages = []
  for (let i = 1; i <= Math.ceil(props.filteredDish.length / props.itemsPerPage); i++) {
    numberOfPages.push(i)
  }

  function showPageDishClick(event) {
    props.SetCurrentPage(event.target.id)
  }

  let pages = numberOfPages.map((pagenumber) => {
    return (
      <li id={pagenumber} onClick={showPageDishClick}>{pagenumber}</li>
    )
  })

  // rendering
  return (
    <section>
      <ul className='pagination'>
        {pages}
      </ul>
    </section>
  )
}

export default Pagination