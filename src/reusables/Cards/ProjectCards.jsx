import React from 'react'
import useThemeStore from '../../hooks/stores/useThemeStore'


const ProjectCards = ({ id, data, index, projectImg, projectName, stacks, link, description }) => {
    const {variant} = useThemeStore(state=>state.theme)

  return (
    <div id={id} key={index} className={`${variant == 'light' ? 'shadow-xl' : 'shadow-sm shadow-brandGray1x'} col-span-1 rounded-lg`}>
        <div className='h-52 w-full rounded-t-lg'>
            <img src={projectImg} alt="" className='w-full h-full rounded-t-lg' />
        </div>
        <div className='w-full rounded-b-lg px-4 py-4 space-y-4'>
        <a href={link} className='font-bold group/projectLink text-2xl flex items-center gap-2 whitespace-nowrap'>
            {projectName}
            <svg className='invisible group-hover/projectLink:visible opacity-0 group-hover/projectLink:opacity-100 -translate-x-5 group-hover/projectLink:-translate-x-0 transition-all duration-500 ease-in-out'  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8225 4.44727L15.375 8.99977L10.8225 13.5523" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.4" d="M2.625 9H15.2475" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
        <p className='whitespace-nowrap overflow-hidden text-ellipsis pr-5 text-sm text-brandPurple2x'>{description}</p>
        <div className={`space-y-2`}>
            <h4 className={``}>Tech Stack</h4>
            <div className={`text-xs grid grid-cols-3 auto-cols-fr auto-rows-fr gap-2 w-full`}>
                {stacks.map((stack, i)=>{
                return <div key={i} className='col-span-1 flex items-center gap-2 border w-full justify-between px-2 py-2 rounded-lg'>
                    <p className='first-letter:uppercase'>{stack.name}</p>
                    <img src={stack.icon} alt={stack.name} />
                </div>
            })}
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectCards