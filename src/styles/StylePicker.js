import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'inline-block',
        backgroundColor: '#cc4141',
        padding: '0px 5px 0px 0px',
        color: 'white',
        height: 35,
        borderBottomRightRadius: 9,
        borderBottomLeftRadius: 9,

    },
    icon: {
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '50%',
        fontSize: 16,
    },
    date: {
        float: 'left',
        boxSizing: 'border-box',
        width: '50%'
    },
    week: {
        float: 'left',
        width: '20%',
        padding: '1px 5px 0px 0px',
        boxSizing: 'border-box',
        fontSize: 17
    },
    time: {
        float: 'right',
        width: '30%',
        padding: '0px 0px 0px 5px',
        boxSizing: 'border-box'
    },

    input: {
        color: 'white',
        backgroundColor: 'transparent',
        border: 0,
        padding: '1% 5%',
        fontSize: 17,
        width: 152
    },

    customHeader: {
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        fontWeight: 'bold', 
        fontSize: '18px' 
    }

}))