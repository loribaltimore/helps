import Grid from '@mui/material/Grid';
import Graphic from './Graphic';
import { allGraphicInfo} from '../../util/allGraphicInfo';

function InfoPanels(props) {

    return (
        <div >
            <Grid container style={{height: '35%', width: '100%', backgroundColor: 'white', padding: '5%'}}>
                {
                    allGraphicInfo.map(function (element, index) {
                        return <Grid item xs={6} style={{ marginBottom: '3%' }} key={index}>
                        <Graphic graphic={element.graphic} text={element.text} />
                    </Grid>
                })
                }
            </Grid>
        </div>
    )
};

export default InfoPanels;