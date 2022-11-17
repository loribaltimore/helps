import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
function Layout(props) {
    
    return (
        <div> 
            <Grid container spacing={0} columns={3}>
            <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                <Item>{props.children}</Item>
            </Grid>
            <Grid item xs={4}></Grid>
                
            </Grid>   
        </div>
    )
};

export default Layout;