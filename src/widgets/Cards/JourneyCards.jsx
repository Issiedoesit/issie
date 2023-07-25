import React from 'react'
import useThemeStore from '../../hooks/stores/useThemeStore'

const JourneyCards = ({ children, bg }) => {
  
  const {primary, variant} = useThemeStore(state=>state.theme)


  return (
    <div className={`grid grid-cols-2 divide-x ${variant === 'light' ? 'divide-gray-500' : 'divide-brandGray1x'} relative backdrop-blur-sm ${bg || 'add-bg-1'}`}>
        {children}
        <div className='h-8 w-8 bg-brandOrange1x rounded-fiftyPercent absolute top-0 left-fiftyPercent -translate-x-fiftyPercent'></div>
    </div>
  )
}

export default JourneyCards