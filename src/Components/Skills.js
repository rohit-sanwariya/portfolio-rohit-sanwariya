import React from 'react'
import { Card } from 'react-bootstrap'

const Skills = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>Javascript</Card.Title>


                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="middle" />
                <Card.Body>
                    <Card.Title>React</Card.Title>


                </Card.Body>
            </Card>

        </div>
    )
}

export default Skills
