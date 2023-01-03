import Grid from '@mui/material/Grid';
import DeleteBtn from './DeleteBtn';
import UpdateBtn from './UpdateBtn';
import { useState } from 'react';
import ProductPut from './ProductPut';

function ProductPanel(props) {
    let { product } = props;
    let [renderDelete, setRenderDelete] = useState(true);
    let [renderUpdate, setRenderUpdate] = useState(true);
    let [isUpdating, setIsUpdating] = useState(false);

    return (
        <div style={{border: '1px solid black', borderRadius: '2rem', backgroundColor: 'white', marginBottom: '2%'}}>
                <Grid container style={{ padding: '2%' }}>
                <Grid item xs={4}>
                    <img src={product.img[0].path} style={{width: '15rem'}}/>
                </Grid>
                <Grid item xs={8} style={{ height: '3rem' }}>
                    {
                        isUpdating === false ?
                            <div>
                                <h1>{product.name}</h1>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <div>
                                            <h3>Cost: {product.cost}</h3>
                                            <h3>Price: {product.price}</h3>
                                            <h3>Total Sold: {product.sold}</h3>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div>
                                            <h3>Total Donated: {product.totalRaised}</h3>
                                            <h3>Popularity: {product.pop}</h3>
                                            <h3>Lead Time: {product.lead} Days</h3>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        {
                                            renderDelete === true ?
                                                <div style={{ width: '100%' }}>
                                                    <DeleteBtn product={product} setRenderUpdate={setRenderUpdate} />
                                                </div> : ''
                                        }
                                        {
                                            renderUpdate === true ?
                                                <div style={{ width: '100%' }}>
                                                    <UpdateBtn product={product} setRenderDelete={setRenderDelete} setIsUpdating={setIsUpdating} isUpdating={isUpdating} />
                                                </div> : ''
                                        }
                                    </Grid>
                                </Grid>
                            </div>
                            : <ProductPut product={product} setIsUpdating={setIsUpdating} setRenderDelete={setRenderDelete}/>
                         }
                    </Grid>
                    </Grid> 
        </div>
    )
};

export default ProductPanel;