import React, {useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import useMobileNav from '../../hooks/stores/useMobileNav'
import useThemeStore from '../../hooks/stores/useThemeStore'
import { BiSun, BiMoon } from 'react-icons/bi'





const Nav = () => {


  const NavRef = useRef()
  const closeDoor = useRef()
  const openDoor = useRef()
  const [isOpen, setIsOpen] = useState(false)
 const { primary, variant } = useThemeStore(state=>state.theme)
 const theme = useThemeStore(state=>state.theme)
 const changeTheme = useThemeStore(state=>state.changeTheme)

 const handleTheme = (e) => {
     changeTheme({...theme, [e.target.name ] : e.target.value})
 }

 const changeVariant = (type) => {
     changeTheme({...theme, ["variant"] : type})
 }

 useEffect(() => {
     $(document.body).css("--color-primary", primary)
     variant == 'light' ? $(document.body).css("--text-theme", "#161616") : $(document.body).css("--text-theme", "#FFFFFF")
 }, [theme])
  
  let args = [
    'block',
    'hidden',
    'group-hover:block',
    'group-hover:hidden',
    'group-hover:text-red1x',
]

const toggleHelper = (el, changes) => {
  changes.map((change) => {
    el.current.classList.toggle(change)
  })
}
// const removeHelper = (el, changes) => {
//   changes.map((change) => {
//     el.current.classList.remove(change)
//   })
// }

  const handleClick = () => {
    NavRef.current.classList.toggle('translate-x-[150%]')
    $('body').toggleClass('max-h-screen overflow-y-hidden')
    toggleHelper(openDoor, args)
    toggleHelper(closeDoor, args)
    setIsOpen((prevIsOpen)=>!prevIsOpen)
    setNavOpen()
  }


  const handleOutsideClick = (e) =>{
    if(!(($(e.target).closest('#navItems').length > 0 ) || ($(e.target).closest('#menuBtn').length > 0))){
      if(!($('#navItems').hasClass('translate-x-[150%]'))){
        handleClick()
      }
    }
  }


  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
  
    return () => {
      document.removeEventListener('click', handleOutsideClick)

    }
  }, [])
  


  return (
    <nav className='sticky top-0 left-0 z-70 flex flex-row justify-between lg:grid grid-cols-12 pt-5 lg:items-center gap-20 border-b border-b-brandPurple1x px-5 sm:px-10 lg:px-20'>
        <div className='col-span-3 pb-5 max-w-28'>
            <NavLink exact="true" to="/" title="Home">
                <svg className='h-fiftyPercent w-10' width="115" height="72" viewBox="0 0 115 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='fill-theme-text-color' d="M0.84 71V0.439999H11.208V71H0.84ZM29.601 71.768C27.329 71.768 25.345 71.384 23.649 70.616C21.953 69.848 20.545 68.76 19.425 67.352C18.305 65.912 17.457 64.216 16.881 62.264C16.337 60.312 16.065 58.136 16.065 55.736H25.089C25.089 57.88 25.425 59.752 26.097 61.352C26.801 62.92 27.969 63.704 29.601 63.704C31.009 63.704 31.921 63.112 32.337 61.928C32.753 60.744 32.961 59.384 32.961 57.848C32.961 56.056 32.257 54.232 30.849 52.376C29.473 50.488 28.033 48.808 26.529 47.336C23.937 44.776 21.777 42.248 20.049 39.752C18.353 37.256 17.505 34.328 17.505 30.968C17.505 27 18.545 23.8 20.625 21.368C22.705 18.936 25.665 17.72 29.505 17.72C31.809 17.72 33.745 18.024 35.313 18.632C36.913 19.24 38.193 20.152 39.153 21.368C40.113 22.584 40.801 24.072 41.217 25.832C41.665 27.592 41.889 29.624 41.889 31.928H32.865C32.865 30.264 32.689 28.824 32.337 27.608C31.985 26.392 31.105 25.784 29.697 25.784C28.545 25.784 27.729 26.28 27.249 27.272C26.769 28.232 26.529 29.464 26.529 30.968C26.529 32.728 26.945 34.296 27.777 35.672C28.641 37.016 30.065 38.664 32.049 40.616C34.545 43.048 36.817 45.64 38.865 48.392C40.945 51.144 41.985 54.136 41.985 57.368C41.985 59.48 41.697 61.416 41.121 63.176C40.577 64.936 39.761 66.456 38.673 67.736C37.617 69.016 36.321 70.008 34.785 70.712C33.281 71.416 31.553 71.768 29.601 71.768ZM58.3823 71.768C56.1103 71.768 54.1263 71.384 52.4303 70.616C50.7343 69.848 49.3263 68.76 48.2063 67.352C47.0863 65.912 46.2383 64.216 45.6623 62.264C45.1183 60.312 44.8463 58.136 44.8463 55.736H53.8703C53.8703 57.88 54.2063 59.752 54.8783 61.352C55.5823 62.92 56.7503 63.704 58.3823 63.704C59.7903 63.704 60.7023 63.112 61.1183 61.928C61.5343 60.744 61.7423 59.384 61.7423 57.848C61.7423 56.056 61.0383 54.232 59.6303 52.376C58.2543 50.488 56.8143 48.808 55.3103 47.336C52.7183 44.776 50.5583 42.248 48.8303 39.752C47.1343 37.256 46.2863 34.328 46.2863 30.968C46.2863 27 47.3263 23.8 49.4062 21.368C51.4863 18.936 54.4463 17.72 58.2863 17.72C60.5903 17.72 62.5263 18.024 64.0943 18.632C65.6943 19.24 66.9743 20.152 67.9343 21.368C68.8943 22.584 69.5823 24.072 69.9983 25.832C70.4463 27.592 70.6703 29.624 70.6703 31.928H61.6463C61.6463 30.264 61.4703 28.824 61.1183 27.608C60.7663 26.392 59.8863 25.784 58.4783 25.784C57.3263 25.784 56.5103 26.28 56.0303 27.272C55.5503 28.232 55.3103 29.464 55.3103 30.968C55.3103 32.728 55.7263 34.296 56.5583 35.672C57.4223 37.016 58.8463 38.664 60.8303 40.616C63.3263 43.048 65.5983 45.64 67.6462 48.392C69.7263 51.144 70.7663 54.136 70.7663 57.368C70.7663 59.48 70.4783 61.416 69.9023 63.176C69.3583 64.936 68.5423 66.456 67.4543 67.736C66.3983 69.016 65.1023 70.008 63.5663 70.712C62.0623 71.416 60.3343 71.768 58.3823 71.768ZM75.0675 71V18.488H84.7635V71H75.0675ZM75.0675 10.136V0.439999H84.7635V10.136H75.0675ZM101.869 71.768C97.9968 71.768 94.9408 70.44 92.7008 67.784C90.4928 65.096 89.3888 61.816 89.3888 57.944V31.544C89.3888 27.448 90.4928 24.12 92.7008 21.56C94.9088 19 97.9968 17.72 101.965 17.72C104.557 17.72 106.781 18.312 108.637 19.496C110.525 20.68 111.965 22.296 112.957 24.344C113.949 26.36 114.445 28.664 114.445 31.256V46.52H98.4128V57.944C98.4128 59.256 98.7008 60.472 99.2768 61.592C99.8848 62.68 100.781 63.224 101.965 63.224C103.213 63.224 104.093 62.712 104.605 61.688C105.149 60.664 105.421 59.416 105.421 57.944V52.184H114.445V58.232C114.445 62.296 113.341 65.576 111.133 68.072C108.957 70.536 105.869 71.768 101.869 71.768ZM98.4128 38.936H105.421V31.544C105.421 30.104 105.165 28.856 104.653 27.8C104.173 26.712 103.277 26.168 101.965 26.168C100.749 26.168 99.8528 26.728 99.2768 27.848C98.7008 28.936 98.4128 30.168 98.4128 31.544V38.936Z" fill="white"/>
                </svg>
                <svg className='rotate-180 h-fiftyPercent w-10' width="115" height="72" viewBox="0 0 115 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='fill-theme-text-color' d="M0.84 71V0.439999H11.208V71H0.84ZM29.601 71.768C27.329 71.768 25.345 71.384 23.649 70.616C21.953 69.848 20.545 68.76 19.425 67.352C18.305 65.912 17.457 64.216 16.881 62.264C16.337 60.312 16.065 58.136 16.065 55.736H25.089C25.089 57.88 25.425 59.752 26.097 61.352C26.801 62.92 27.969 63.704 29.601 63.704C31.009 63.704 31.921 63.112 32.337 61.928C32.753 60.744 32.961 59.384 32.961 57.848C32.961 56.056 32.257 54.232 30.849 52.376C29.473 50.488 28.033 48.808 26.529 47.336C23.937 44.776 21.777 42.248 20.049 39.752C18.353 37.256 17.505 34.328 17.505 30.968C17.505 27 18.545 23.8 20.625 21.368C22.705 18.936 25.665 17.72 29.505 17.72C31.809 17.72 33.745 18.024 35.313 18.632C36.913 19.24 38.193 20.152 39.153 21.368C40.113 22.584 40.801 24.072 41.217 25.832C41.665 27.592 41.889 29.624 41.889 31.928H32.865C32.865 30.264 32.689 28.824 32.337 27.608C31.985 26.392 31.105 25.784 29.697 25.784C28.545 25.784 27.729 26.28 27.249 27.272C26.769 28.232 26.529 29.464 26.529 30.968C26.529 32.728 26.945 34.296 27.777 35.672C28.641 37.016 30.065 38.664 32.049 40.616C34.545 43.048 36.817 45.64 38.865 48.392C40.945 51.144 41.985 54.136 41.985 57.368C41.985 59.48 41.697 61.416 41.121 63.176C40.577 64.936 39.761 66.456 38.673 67.736C37.617 69.016 36.321 70.008 34.785 70.712C33.281 71.416 31.553 71.768 29.601 71.768ZM58.3823 71.768C56.1103 71.768 54.1263 71.384 52.4303 70.616C50.7343 69.848 49.3263 68.76 48.2063 67.352C47.0863 65.912 46.2383 64.216 45.6623 62.264C45.1183 60.312 44.8463 58.136 44.8463 55.736H53.8703C53.8703 57.88 54.2063 59.752 54.8783 61.352C55.5823 62.92 56.7503 63.704 58.3823 63.704C59.7903 63.704 60.7023 63.112 61.1183 61.928C61.5343 60.744 61.7423 59.384 61.7423 57.848C61.7423 56.056 61.0383 54.232 59.6303 52.376C58.2543 50.488 56.8143 48.808 55.3103 47.336C52.7183 44.776 50.5583 42.248 48.8303 39.752C47.1343 37.256 46.2863 34.328 46.2863 30.968C46.2863 27 47.3263 23.8 49.4062 21.368C51.4863 18.936 54.4463 17.72 58.2863 17.72C60.5903 17.72 62.5263 18.024 64.0943 18.632C65.6943 19.24 66.9743 20.152 67.9343 21.368C68.8943 22.584 69.5823 24.072 69.9983 25.832C70.4463 27.592 70.6703 29.624 70.6703 31.928H61.6463C61.6463 30.264 61.4703 28.824 61.1183 27.608C60.7663 26.392 59.8863 25.784 58.4783 25.784C57.3263 25.784 56.5103 26.28 56.0303 27.272C55.5503 28.232 55.3103 29.464 55.3103 30.968C55.3103 32.728 55.7263 34.296 56.5583 35.672C57.4223 37.016 58.8463 38.664 60.8303 40.616C63.3263 43.048 65.5983 45.64 67.6462 48.392C69.7263 51.144 70.7663 54.136 70.7663 57.368C70.7663 59.48 70.4783 61.416 69.9023 63.176C69.3583 64.936 68.5423 66.456 67.4543 67.736C66.3983 69.016 65.1023 70.008 63.5663 70.712C62.0623 71.416 60.3343 71.768 58.3823 71.768ZM75.0675 71V18.488H84.7635V71H75.0675ZM75.0675 10.136V0.439999H84.7635V10.136H75.0675ZM101.869 71.768C97.9968 71.768 94.9408 70.44 92.7008 67.784C90.4928 65.096 89.3888 61.816 89.3888 57.944V31.544C89.3888 27.448 90.4928 24.12 92.7008 21.56C94.9088 19 97.9968 17.72 101.965 17.72C104.557 17.72 106.781 18.312 108.637 19.496C110.525 20.68 111.965 22.296 112.957 24.344C113.949 26.36 114.445 28.664 114.445 31.256V46.52H98.4128V57.944C98.4128 59.256 98.7008 60.472 99.2768 61.592C99.8848 62.68 100.781 63.224 101.965 63.224C103.213 63.224 104.093 62.712 104.605 61.688C105.149 60.664 105.421 59.416 105.421 57.944V52.184H114.445V58.232C114.445 62.296 113.341 65.576 111.133 68.072C108.957 70.536 105.869 71.768 101.869 71.768ZM98.4128 38.936H105.421V31.544C105.421 30.104 105.165 28.856 104.653 27.8C104.173 26.712 103.277 26.168 101.965 26.168C100.749 26.168 99.8528 26.728 99.2768 27.848C98.7008 28.936 98.4128 30.168 98.4128 31.544V38.936Z" fill="white"/>
                </svg>
            </NavLink>
        </div>
        <div ref={NavRef} id="navItems" className={`fixed h-screen text-center overflow-y-auto lg:overflow-y-hidden lg:text-left top-0 right-0 border-l border-l-brandPurple1x lg:border-l-0 py-24 lg:py-0 px-20 lg:px-0 lg:static ${variant == 'light' ? 'bg-white' : 'bg-black'} lg:bg-transparent z-20 flex flex-col translate-x-[150%] lg:translate-x-0 transition-transform duration-700 lg:flex-row lg:h-full lg:items-center justify-between col-span-9`}>
          <div className='flex flex-col lg:flex-row items-center gap-10'>
            <NavLink href="" className={`px-3 hover:text-brandPurple2x transition-colors ease-in-out duration-500`}>About</NavLink>
            <a href="#techJourney" className={`px-3 hover:text-brandPurple2x transition-colors ease-in-out duration-500`}>My Tech Journey</a>
            <NavLink exact="true" to="/landlord" className={`px-3 hover:text-brandPurple2x transition-colors ease-in-out duration-500`}>Projects</NavLink>
            <NavLink exact="true" to="/tenants" className={`px-3 hover:text-brandPurple2x transition-colors ease-in-out duration-500`}>Skills</NavLink>
            <NavLink exact="true" to="/contact" className={`px-3 hover:text-brandPurple2x transition-colors ease-in-out duration-500`}>Contact</NavLink>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-4'>
            <a href='https://docs.google.com/document/d/1Ad0tX2nu4hvyqp_CwjdcT4TOIa2sfk-Fh3Z2TBWXPas/edit?usp=sharing' download className='rounded-lg text-sm hover:scale-90 transition-all duration-500 ease-in-out px-4 py-3 text-white bg-brandPurple1x'>Download CV</a>
            <button className={`flex items-center rounded-ten px-2 py-1 w-fit h-fit border ${theme === 'light' ? 'border-white' : 'border-slate-600'}`} onClick={()=>{variant == 'light' ? changeVariant('dark') : changeVariant('light')}}>
                {variant == 'light' ? <BiMoon size="20px" color={primary} /> : <BiSun color='orange' size="20px" />}
            </button>
          </div>  
        </div>
        <button type='button' id="menuBtn" title='Menu' onClick={handleClick} className={`group ${isOpen && 'fixed top-10 right-5 z-70'} px-5 space-y-1 lg:hidden`}>
          <p className="hidden">Menu</p>
            <div className={`bg-theme-text-color xs:w-6 xs:h-0.5 w-8 h-0.75 rounded-ten group-hover:bg-brandPurple1x ${isOpen ? 'rotate-45 origin-center xs:translate-y-0.75 translate-y-[3.5px]' : ''} transition-all duration-300 ease-in-out`}></div>
              <div className={`bg-theme-text-color xs:w-6 xs:h-0.5 w-8 h-0.75 rounded-ten  ${isOpen ? 'hidden transition-all duration-100 ease-in-out' : 'transition-all duration-300 ease-in-out group-hover:bg-brandPurple1x'}`}></div>
              <div className={`bg-theme-text-color xs:w-6 xs:h-0.5 w-8 h-0.75 rounded-ten group-hover:bg-brandPurple1x ${isOpen ? '-rotate-45 origin-center  xs:-translate-y-0.75 -translate-y-[3.5px]' : ''} transition-all duration-300 ease-in-out`}></div>
        </button>
    </nav>
  )
}

export default Nav
