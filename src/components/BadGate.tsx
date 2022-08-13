import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../utils/style.css";

export default function BadGate() {
    const BRouterlocation = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('')

    function home() {
        navigate('/')
        window.location.reload();
    }

    return (
        <Box className="centerColumn">
            <Typography variant="h5">
                Ett fel inträffade
            </Typography>
            <Button onClick={() => home()}> Gå tillbaka</Button >
        </Box >
    );
}