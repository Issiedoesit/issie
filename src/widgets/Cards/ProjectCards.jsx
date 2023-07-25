import React from 'react'
import useThemeStore from '../../hooks/stores/useThemeStore'


const ProjectCards = ({ id, index, projectImg, projectName, stacks, link, description }) => {
    const {variant} = useThemeStore(state=>state.theme)
    const location = window.location.href;


  return (
    <div id={id} key={index} className={`${variant == 'light' ? 'shadow-xl border-0.5' : 'shadow-sm shadow-brandGray1x'} col-span-1 rounded-lg max-w-sm mx-auto w-full`}>
        <div className={`h-52 w-full rounded-t-lg`}>
            <img src={projectImg} alt="" className='w-full h-full rounded-t-lg' />
        </div>
        <div className={`w-full rounded-b-lg px-4 py-4 space-y-4 ${variant == 'light' && 'border-t-0.5 border-t-brandGray1x'}`}>
        <div className={`flex gap-5 justify-between items-center`}>
            <a href={link} className='font-bold group/projectLink text-2xl flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis'>
                {projectName}
                <svg className='invisible group-hover/projectLink:visible opacity-0 group-hover/projectLink:opacity-100 -translate-x-5 group-hover/projectLink:-translate-x-0 transition-all duration-500 ease-in-out'  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8225 4.44727L15.375 8.99977L10.8225 13.5523" stroke={`${variant == 'light' ? '#292D32' : '#FFFFFF'}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M2.625 9H15.2475" stroke={`${variant == 'light' ? '#292D32' : '#FFFFFF'}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
            <div className={`text-sm flex gap-2`}>
                <a href="#">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_29)">
                        <rect width="24.2188" height="23.6136" fill="none"/>
                        <path className='fill-brandPurple2x' d="M8.10059 19.0137C8.10059 19.1113 7.98828 19.1895 7.84668 19.1895C7.68555 19.2041 7.57324 19.126 7.57324 19.0137C7.57324 18.916 7.68555 18.8379 7.82715 18.8379C7.97363 18.8232 8.10059 18.9014 8.10059 19.0137ZM6.58203 18.7939C6.54785 18.8916 6.64551 19.0039 6.79199 19.0332C6.91895 19.082 7.06543 19.0332 7.09473 18.9355C7.12402 18.8379 7.03125 18.7256 6.88477 18.6816C6.75781 18.6475 6.61621 18.6963 6.58203 18.7939ZM8.74023 18.7109C8.59863 18.7451 8.50098 18.8379 8.51562 18.9502C8.53027 19.0479 8.65723 19.1113 8.80371 19.0771C8.94531 19.043 9.04297 18.9502 9.02832 18.8525C9.01367 18.7598 8.88184 18.6963 8.74023 18.7109ZM11.9531 0C5.18066 0 0 5.1416 0 11.9141C0 17.3291 3.4082 21.9629 8.27637 23.5938C8.90137 23.7061 9.12109 23.3203 9.12109 23.0029C9.12109 22.7002 9.10645 21.0303 9.10645 20.0049C9.10645 20.0049 5.68848 20.7373 4.9707 18.5498C4.9707 18.5498 4.41406 17.1289 3.61328 16.7627C3.61328 16.7627 2.49512 15.9961 3.69141 16.0107C3.69141 16.0107 4.90723 16.1084 5.57617 17.2705C6.64551 19.1553 8.4375 18.6133 9.13574 18.291C9.24805 17.5098 9.56543 16.9678 9.91699 16.6455C7.1875 16.3428 4.43359 15.9473 4.43359 11.25C4.43359 9.90723 4.80469 9.2334 5.58594 8.37402C5.45898 8.05664 5.04395 6.74805 5.71289 5.05859C6.7334 4.74121 9.08203 6.37695 9.08203 6.37695C10.0586 6.10352 11.1084 5.96191 12.1484 5.96191C13.1885 5.96191 14.2383 6.10352 15.2148 6.37695C15.2148 6.37695 17.5635 4.73633 18.584 5.05859C19.2529 6.75293 18.8379 8.05664 18.7109 8.37402C19.4922 9.23828 19.9707 9.91211 19.9707 11.25C19.9707 15.9619 17.0947 16.3379 14.3652 16.6455C14.8145 17.0312 15.1953 17.7637 15.1953 18.9111C15.1953 20.5566 15.1807 22.5928 15.1807 22.9932C15.1807 23.3105 15.4053 23.6963 16.0254 23.584C20.9082 21.9629 24.2188 17.3291 24.2188 11.9141C24.2188 5.1416 18.7256 0 11.9531 0ZM4.74609 16.8408C4.68262 16.8896 4.69727 17.002 4.78027 17.0947C4.8584 17.1729 4.9707 17.207 5.03418 17.1436C5.09766 17.0947 5.08301 16.9824 5 16.8896C4.92188 16.8115 4.80957 16.7773 4.74609 16.8408ZM4.21875 16.4453C4.18457 16.5088 4.2334 16.5869 4.33105 16.6357C4.40918 16.6846 4.50684 16.6699 4.54102 16.6016C4.5752 16.5381 4.52637 16.46 4.42871 16.4111C4.33105 16.3818 4.25293 16.3965 4.21875 16.4453ZM5.80078 18.1836C5.72266 18.2471 5.75195 18.3936 5.86426 18.4863C5.97656 18.5986 6.11816 18.6133 6.18164 18.5352C6.24512 18.4717 6.21582 18.3252 6.11816 18.2324C6.01074 18.1201 5.86426 18.1055 5.80078 18.1836ZM5.24414 17.4658C5.16602 17.5146 5.16602 17.6416 5.24414 17.7539C5.32227 17.8662 5.4541 17.915 5.51758 17.8662C5.5957 17.8027 5.5957 17.6758 5.51758 17.5635C5.44922 17.4512 5.32227 17.4023 5.24414 17.4658Z" fill="#6C3883"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_29">
                        <rect width="24.2188" height="23.6136" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </div>
        <p className='whitespace-nowrap overflow-hidden text-ellipsis pr-5 text-sm text-brandPurple2x'>{description}</p>
        <div className={`space-y-2`}>
            <h4 className={`font-bold`}>Tech Stack:</h4>
            <div className={`text-xxs flex flex-wrap auto-cols-fr auto-rows-fr gap-2 w-full`}>
                {stacks.map((stack, i)=>{
                return <div key={i} className='col-span-1 flex items-center gap-2 border w-thirtyPercent justify-between px-2 py-2 rounded-lg'>
                    <p className='first-letter:uppercase overflow-hidden whitespace-nowrap text-ellipsis'>{stack.name}</p>
                    <img src={`${stack.icon}`} alt={stack.name} className={`w-5`} />
                </div>
            })}
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectCards
