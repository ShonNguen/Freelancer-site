import * as React from 'react';

import { Box, Grid, Link, Container, Typography, TextField } from '@mui/material';

function Copyright() {
    return (
        <React.Fragment>
            {'© '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}

const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'warning.main',
    mr: 1,
    '&:hover': {
        bgcolor: 'warning.dark',
    },
};

const LANGUAGES = [
    {
        code: 'en-US',
        name: 'English',
    },
    {
        code: 'fr-FR',
        name: 'Français',
    },
];

export default function AppFooter() {
    return (
        <Typography
            component="footer"
            sx={{ display: 'flex', bgcolor: '#616161', color: '#fafafa' }}
        >
            <Container sx={{ my: 8, display: 'flex' }}>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            spacing={2}
                            sx={{ height: 120 }}
                        >
                            <Grid item sx={{ display: 'flex' }}>
                                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                                    <img
                                        src="/static/themes/onepirate/appFooterFacebook.png"
                                        alt="Facebook"
                                    />
                                </Box>
                                <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
                                    <img
                                        src="/static/themes/onepirate/appFooterTwitter.png"
                                        alt="Twitter"
                                    />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6" marked="left" gutterBottom>
                            Legal
                        </Typography>
                        <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                            <Box component="li" sx={{ py: 0.5 }}>
                                <Link href="/pages/terms/">Terms</Link>
                            </Box>
                            <Box component="li" sx={{ py: 0.5 }}>
                                <Link href="/pages/privacy/">Privacy</Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}