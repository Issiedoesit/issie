import React, { useState } from 'react'
import SectionHeader from '../../../widgets/Text/Headers/SectionHeader'
import SectionWrap from '../../../widgets/Wraps/SectionWrap'
import ProjectsData from '../../../data/ProjectsData'
import ProjectCards from '../../../widgets/Cards/ProjectCards'


const Projects = () => {

    const location = window.location.href;

    const [filter, setFilter] = useState('')

    const filteredData = ProjectsData.filter((item) => filter === '' || item.type == filter)

  return (
    <SectionWrap id={'projects'}>
        <SectionHeader highLightBorderColor={'border-b-brandOrange1x'} remText={'Projects'} textSpan={'Portfolio'} />
        <div className='flex flex-row items-center gap-5 sm:gap-10 justify-between pt-10 pb-5 text-xs sm:text-sm md:text-base'>
          <div>Filter:</div>
          <div className='flex flex-row items-center text-xs sm:text-sm md:text-base gap-1 sm:gap-4  text-theme-text-color'>
            <button type='button' onClick={()=>setFilter('')} className={`filter-project transition-all ease-in-out duration-500 ${filter === '' ? 'bg-brandOrange1x' : 'hover:bg-brandOrange1x/50 bg-transparent'} rounded-fifty px-6 py-2`}>All</button>
            <button type='button' onClick={()=>setFilter('professional')} className={`filter-project transition-all ease-in-out duration-500 ${filter === 'professional' ? 'bg-brandOrange1x' : 'hover:bg-brandOrange1x/50 bg-transparent'} rounded-fifty px-6 py-2`}>Professional</button>
            <button type='button' onClick={()=>setFilter('personal')} className={`filter-project transition-all ease-in-out duration-500 ${filter === 'personal' ? 'bg-brandOrange1x' : 'hover:bg-brandOrange1x/50 bg-transparent'} rounded-fifty px-6 py-2`}>Personal</button>
          </div>
        </div>
        <div className='py-20 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-theme-text-color'>
           {filteredData.map((data, index)=>{
               return <ProjectCards data={data[index]} id={'project'+data.id} key={index} projectImg={`${data.image}`} projectName={data.name} link={data.link} description={data.description} stacks={data.techStack} />
           })}
        </div>
    </SectionWrap>
  )
}

export default Projects
