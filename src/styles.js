import { makeStyles } from '@mui/styles';

const useStyles=makeStyles((theme)=>({
    container:{
        background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: '20px 30px',
        margin:'0px 0px 50px 0px'
    },
    icon:{
        marginRight:'20px'
    },
    button:{
        marginTop:'40px'
    },
    cardGrid:{
        padding:'20px,0'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardMedia:{
        paddingTop:'56.25%'  // 16:9 ratio
    },
    cardContent:{
        flexGrow:1
    },
    footer:{
        background:"linear-gradient(to left,#a31ed2,#46ff00)",
        padding:'50px 0px'
    }
}));

export default useStyles;