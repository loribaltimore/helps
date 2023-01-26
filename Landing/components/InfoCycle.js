import { allGraphicCycle} from '../../util/allGraphicInfo';
import CyclePanel from './CyclePanel';
import Grid from '@mui/material/Grid';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import { ArrowBackSharp } from '@mui/icons-material';
function InfoCycle(props) {

    return (
        <div style={{ backgroundColor: 'lightgoldenrodyellow' }}>
            <TurnRightIcon style={{position: 'absolute', left: '56rem', fontSize: '6rem', rotate: '90deg', color: 'grey'}}/>
            <TurnRightIcon style={{position: 'absolute', left: '56rem', top: '63rem', fontSize: '6rem', rotate: '180deg', color: 'grey'}}/>
            <TurnRightIcon style={{position: 'absolute', left: '28rem', top: '63rem', fontSize: '6rem', rotate: '270deg', color: 'grey'}}/>
            <TurnRightIcon style={{position: 'absolute', left: '28rem', fontSize: '6rem', color: 'grey'}}/>
            <Grid container >
            {
                    allGraphicCycle.map(function (element, index) {
                        let size = undefined;
                        index === 1 || index === 2 ?
                            size = 6 : size = 12
                        let shift = 12 / size;
                    return <Grid item xs={size} key={index}>
                        <CyclePanel graphic={element.graphic} text={element.text} shift={shift}/>
                            </Grid>
            })
            }
            </Grid>
        </div>
    )

};

export default InfoCycle;


// rotate arrows, create cycle
