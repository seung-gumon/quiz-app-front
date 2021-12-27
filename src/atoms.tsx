import {atom, selector} from "recoil";




export const userName = atom<string>({
    key: "userName",
    default: ""
})