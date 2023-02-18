import { create } from "zustand";
import {devtools} from 'zustand/middleware'


const useThemeStore = create(devtools((set)=>({
    theme: {
        "variant":"dark",
        "primary": "#6C3883"
    },
    changeTheme: (val) =>
        set({theme: val}),
})))

export default useThemeStore