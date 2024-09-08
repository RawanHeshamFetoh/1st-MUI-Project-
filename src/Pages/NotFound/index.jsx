import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

function NotFound() {
    const theme  = useTheme();
    return (  
        <Box>
            <Typography variant="h4" color={theme.palette.error.main}> Error 404</Typography>
        </Box>
    );
}

export default NotFound;