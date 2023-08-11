import { Container, TextField } from '@mui/material'
import React from 'react'

export const LoginForm = () => {
    return (
        <div>
            <Container>
                <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
            </Container>
        </div>
    )
}
