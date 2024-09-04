interface ErrorProps {
    command: string
}

export default function Error({ command }: ErrorProps) {
    return (
        <>
            <div>{command + ": command not found, type 'help' for supported commands"}</div>
        </>
    )
}
