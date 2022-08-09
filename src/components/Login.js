import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function Login(props) {
    console.log(props)
    const { setLoggedIn } = props
    const handleSubmit = (e) => {
        console.log(e)
        setLoggedIn(true)
    }
    return (
        <div>
            <Typography variant="h6" gutterBottom mt={10}>
                Login Screen
            </Typography>

            <Stack spacing={2} width={300} margin="auto" component={"form"} onSubmit={(e) => { handleSubmit(e) }}>

                <TextField id="username" label="Email" variant="outlined" />
                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <Button type='submit' variant="contained" style={{ marginTop: 15 }}>Submit</Button>
            </Stack>
        </div>
    );
}
