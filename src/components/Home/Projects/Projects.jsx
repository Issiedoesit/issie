import React from 'react'
import SectionHeader from '../../../reusables/Text/Headers/SectionHeader'
import SectionWrap from '../../../reusables/Wraps/SectionWrap'
import ProjectsData from '../../../data/ProjectsData'
import ProjectCards from '../../../reusables/Cards/ProjectCards'


const Projects = () => {

    const location = window.location.href;

  return (
    <SectionWrap>
        <SectionHeader highLightBorderColor={'border-b-brandOrange1x'} remText={'Projects'} textSpan={'Portfolio'} />
        <div className='py-20 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-theme-text-color'>
           {ProjectsData.map((data, index)=>{
               return <ProjectCards data={data[index]} id={'project'+data.id} key={index} projectImg={`${data.image}`} projectName={data.name} link={data.link} description={data.description} stacks={data.techStack} />
           })}
        </div>
    </SectionWrap>
  )
}

export default Projects
