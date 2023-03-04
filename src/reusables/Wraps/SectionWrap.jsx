import React from 'react'

const SectionWrap = ({id, children, bgColor}) => {
  return (
    <div id={id} className={`px-5 sm:px-10 lg:px-20 py-10 md:py-14 ${bgColor}`}>
        {children}
    </div>
  )
}

export default SectionWrap