import React, { useEffect } from 'react'
import useThemeStore from '../../hooks/stores/useThemeStore'
import { BiSun, BiMoon } from 'react-icons/bi'
import $ from 'jquery'

const Nav = () => {
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
  return (
    <nav>
        Nav

        <button className='' onClick={()=>{variant == 'light' ? changeVariant('dark') : changeVariant('light')}}>
            {variant == 'light' ? <BiMoon size="20px" color={primary} /> : <BiSun color='orange' size="20px" />}
        </button>

    </nav>
  )
}

export default Nav