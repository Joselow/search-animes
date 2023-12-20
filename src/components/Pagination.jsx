import  { useState } from 'react';

export function Pagination ({ pagination, handlePagination }) {
  const [activePage, setActivePage] = useState(pagination?.current_page); 

  const numberPages = pagination?.last_visible_page

  const handleClick = (page) => {
    handlePagination(page)
    setActivePage(page)
  }

  const getButtonStyle = (pageIndex) => {
    return {
      backgroundColor: activePage === pageIndex ? '#F1215D' : '#965165',
      margin: '0 2px 0'
    };
  };

  return (
    <div>
      {
        Array.from({ length: numberPages }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => handleClick(index+1)}
            style={getButtonStyle(index + 1)}
            >
              {index + 1} 
          </button>
        ))
      }
    </div>
  )
}