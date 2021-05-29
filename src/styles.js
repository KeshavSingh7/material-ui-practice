import { makeStyles } from '@material-ui/core/styles';

const useStyles =
    makeStyles((theme) => ({
        icon: {
            marginRight: '5px'
        },
        header: {
            marginTop: 50,
        },
        buttons: {
            marginTop: '25px'
        },
        cardGrid: {
            padding: '40px 0'
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        cardMedia: {
            paddingTop: '56.25%'
        },
        cardContent: {
            flexGrow: '1'
        }
    })
    )

export default useStyles;
