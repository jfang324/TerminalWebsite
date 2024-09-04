import { Stack } from 'react-bootstrap'

interface OldCommandProps {
    command: string
}

export default function OldCommand({ command }: OldCommandProps) {
    return (
        <>
            <Stack direction="horizontal" className="w-100 d-flex" gap={2}>
                <div>{'User@Host:~$'}</div>
                <Stack direction="horizontal">
                    <div className="text-nowrap overflow-hidden">{command}</div>
                </Stack>
            </Stack>
        </>
    )
}
