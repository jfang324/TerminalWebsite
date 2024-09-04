import { useEffect, useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import CursorLine from './components/CursorLine'
import OldCommand from './components/OldCommand'
import Response from './components/Response'
import { descriptions } from './content'
import './App.css'

import { Analytics } from '@vercel/analytics/react'

function App() {
    /**
     * lineContent - The current text content in the hidden input
     * cmdHistory - An array of all previous inputs
     * welcomed - A boolean indicating if the greeting has been displayed
     */
    const [lineContent, setLineContent] = useState('')
    const [cmdHistory, setCmdHistory] = useState<string[]>([])
    const [welcomed, setWelcomed] = useState(false)

    useEffect(() => {
        handleClick()
    }, [])

    useEffect(() => {
        ;(document.getElementById('cursor') as any).scrollIntoViewIfNeeded()
    }, [cmdHistory])

    /**
     * Focuses on the hidden input
     */
    function handleClick(): void {
        let temp = document.getElementById('hidden-input')!
        temp.focus()
    }

    /**
     * Responds to user input
     *
     * @param e - The source of the event
     */
    function handleTyping(e: any): void {
        if (e.key === 'Enter') {
            if (e.target.value === 'clear') {
                e.target.value = ''
                setLineContent('')
                setCmdHistory([])
                setWelcomed(true)
            } else {
                let newCmdHistory = [...cmdHistory]
                newCmdHistory.push(e.target.value)

                e.target.value = ''
                setLineContent('')
                setCmdHistory(newCmdHistory)
            }
        } else {
            setLineContent(e.target.value)
        }
    }

    return (
        <>
            <Analytics></Analytics>
            <Container
                fluid
                className="bg-black h-100 pt-2"
                style={{
                    fontSize: '14px',
                    fontFamily: 'Ubuntu Mono, monospace',
                    color: 'limegreen',
                    fontWeight: 300,
                    minHeight: '100vh',
                }}
                onClick={handleClick}
            >
                {!welcomed && (
                    <div>
                        Welcome to my interactive terminal website. For a list of supported commands type 'help'. Enjoy
                        your stay!
                    </div>
                )}
                {cmdHistory.map((cmd, index) => {
                    let temp = cmd.split(' ')
                    return (
                        <Stack key={index + ' ' + cmd}>
                            <OldCommand command={cmd}></OldCommand>
                            <Response
                                commandList={Object.keys(descriptions)}
                                command={temp[0]}
                                arg={temp[1]}
                            ></Response>
                        </Stack>
                    )
                })}
                <CursorLine content={lineContent}></CursorLine>
                <input
                    id="hidden-input"
                    onChange={handleTyping}
                    onKeyDown={handleTyping}
                    spellCheck="false"
                    autoCorrect="false"
                    autoComplete="false"
                ></input>
            </Container>
        </>
    )
}

export default App
