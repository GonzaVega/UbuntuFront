import SearchBar from "@/components/searchBar/SearchBar";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

export default function SearchBarContainer(){
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundImage: `url("../../src/assets/images/landing/imagen_hero.png")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '488px'
        }}>
            <Container sx={{ px:'1rem' }}>
                <SearchBar/>
                <Typography
                    variant="h2" 
                    color={theme.palette.text.primary}
                    sx={{
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        letterSpacing: '0px',
                        textAlign: 'left',
                        color: '#FDFDFE',
                        paddingY: '1rem'
                    }}
                >
                    FINANCIAMIENTO SOSTENIBLE
                </Typography>

                <Box sx={{
                    width: '70%',
                    float: 'left',
                    clear: 'both' 
                }}>
                    <Typography
                        variant="body1" 
                        sx={{
                            fontFamily: 'Lato',
                            fontSize: '28px',
                            fontWeight: 500,
                            lineHeight: '33px',
                            letterSpacing: '0px',
                            textAlign: 'left',
                            color: '#FDFDFE', 
                        }}
                    >
                        Impulsamos el desarrollo de finanzas de impacto, liderando la transición hacia un modelo financiero sostenible
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}