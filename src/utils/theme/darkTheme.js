import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    name: 'dark',
    palette: {
        type: 'dark',
        primary: {
            main: '#282831',
            iconColor: '#fafafa',
            contrastText: '#fafafa',
            searchBar: 'rgba(250,250,250,0.2)',
            articleBackground: '#333333'
        },
        secondary: {
            main: '#de4747',
        },
        background: {
            default: '#303030',
            paper: '#424242',
            iconColor: '#fafafa'
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.7)',
            appBarContrast: '#fafafa',
            dropDownContrast: '#fafafa'
        },
    },
});

export default darkTheme;