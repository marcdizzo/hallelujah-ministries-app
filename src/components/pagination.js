import React from 'react'

const Pagination = ({ sermonsPerPage, totalSermons, paginate }) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalSermons / sermonsPerPage); i++){
        window.scrollTo({top: 0})
        pageNumbers.push(i);
    }
  return (
    <>
    <nav>
        <ul className='pagination flex justify-end'>
            {
                pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className='page-link  cursor-pointer'>
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
    
    </>
   
  )
}

export default Pagination