import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        border: '1px solid #e75152',
        borderRadius: 11,
        margin: '0 4%',
        width: '91%',
        height: 75,
        position: 'relative',
        opacity: 1
    },

    placeholder: {
        width: '98%',
        height: 40,
        float: 'left',
        padding: '0% 2%',
        background: 'transparent',
        color: '#797979',
        fontWeight: 'bold',
        border: 'none',
        outline: 'none'
    },

    title: {
        fontSize: 14,
        color: '#8c8c8c',
        fontWeight: 400,
        fontFamily: 'Roboto',
        marginBottom: 5
    },

    icon: {
        fontSize: 17,
        marginRight: 10,
        marginBottom: 4
    }

    
}))