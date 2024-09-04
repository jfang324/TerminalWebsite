import Introduction from './Introduction'
import Error from './Error'
import FileList from './FileList'
import CatFile from './CatFile'
import HelpList from './HelpList'

interface ResponseProps {
    commandList: string[]
    command: string
    arg: string
}

export default function Response({ commandList, command, arg }: ResponseProps) {
    return (
        <>
            {!commandList.includes(command) && <Error command={command}></Error>}
            {command === 'whoami' && <Introduction></Introduction>}
            {command === 'ls' && <FileList></FileList>}
            {command === 'cat' && <CatFile fileName={arg}></CatFile>}
            {command === 'help' && <HelpList></HelpList>}
        </>
    )
}
