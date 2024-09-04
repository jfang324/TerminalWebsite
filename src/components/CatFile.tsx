import { Stack } from 'react-bootstrap'
import { files, skills, projects, contacts } from '../content'

interface CatFileProps {
    fileName: string
}

export default function CatFile({ fileName }: CatFileProps) {
    return (
        <>
            {!files.includes(fileName) && <div>{'cat: ' + fileName + ': No such file or directory'}</div>}
            {fileName === 'skills.txt' && (
                <Stack>
                    {skills.map((skill: string[]) => {
                        return <div key={skill[0]}>{skill[0] + skill[1]}</div>
                    })}
                </Stack>
            )}
            {fileName === 'projects.txt' && (
                <Stack direction="horizontal" className="d-flex flex-wrap">
                    {projects.map((project: string[]) => {
                        return (
                            <a
                                onClick={() => {
                                    window.open(project[1])
                                }}
                                className="text-decoration-none pe-3"
                                style={{ cursor: 'pointer' }}
                                key={project[1]}
                            >
                                {project[0]}
                            </a>
                        )
                    })}
                </Stack>
            )}
            {fileName === 'contacts.txt' && (
                <Stack>
                    {contacts.map((contact: string[]) => {
                        return (
                            <div className="d-flex" key={contact[1]}>
                                <div
                                    className="d-block"
                                    onClick={() => {
                                        if (contact[0] !== 'Name: ') {
                                            if (contact[0] === 'Email: ') {
                                                location.href = 'mailto:' + contact[1]
                                            } else {
                                                window.open(contact[1])
                                            }
                                        }
                                    }}
                                    style={{
                                        cursor: contact[0] !== 'Name: ' ? 'pointer' : 'default',
                                    }}
                                >
                                    {contact[0] + contact[1]}
                                </div>
                            </div>
                        )
                    })}
                </Stack>
            )}
        </>
    )
}
