import { createContext } from "react";

export const NoteTakingAppContext = createContext();

const NotesAppContext = ({children})=>{
    return <NoteTakingAppContext.Provider>{children}</NoteTakingAppContext.Provider>
}

export default NotesAppContext