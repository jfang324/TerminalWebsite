import { Stack } from 'react-bootstrap'

interface CursorLineProps {
    content: string
}

export default function CursorLine({ content }: CursorLineProps) {
    return (
        <>
            <Stack direction="horizontal" className="w-100" gap={2}>
                <div>{'User@Host:~$'}</div>
                <div>
                    <span>{content}</span>
                    <span className="bg-light" id="cursor">
                        &nbsp;
                    </span>
                </div>
            </Stack>
        </>
    )
}
