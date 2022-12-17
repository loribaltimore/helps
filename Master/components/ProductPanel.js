import Grid from '@mui/material/Grid';


function ProductPanel(props) {
    let {product} = props;

    return (
        <div>
            <Grid container>
                <Grid item xs={4}>
                    <img src="" />
                </Grid>
                <Grid item xs={8}>
                    <div>
                    <h3>Product Name</h3>
                    <h5>Product Cost</h5>
                    <h5>Product Price</h5>
                    <h5>Product Sold</h5>
                    <h5>Product Raised</h5>
                    <h5>Product Popularity</h5>
                    <h5>Product Lead</h5>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default ProductPanel;