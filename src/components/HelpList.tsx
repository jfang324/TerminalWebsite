import { Stack } from 'react-bootstrap'
import { descriptions } from '../content'

interface HelpListProps {}

export default function HelpList({}: HelpListProps) {
    return (
        <>
            <Stack>
                {Object.keys(descriptions).map((command: string) => {
                    return (
                        <div key={command}>{command + ' - ' + descriptions[command as keyof typeof descriptions]}</div>
                    )
                })}
            </Stack>
        </>
    )
}
