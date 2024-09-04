import { Stack } from 'react-bootstrap'
import { files } from '../content'

interface FileListProps {}

export default function fileList({}: FileListProps) {
    return (
        <>
            <Stack direction="horizontal">
                {files.map((file: string) => {
                    return (
                        <div className="pe-3" key={file}>
                            {file}
                        </div>
                    )
                })}
            </Stack>
        </>
    )
}
