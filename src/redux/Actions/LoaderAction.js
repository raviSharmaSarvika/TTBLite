import { LOADER } from "../types"

export const handleLoggin = (value) => {
    return{
        type: LOADER,
        payload:value
    }
}

