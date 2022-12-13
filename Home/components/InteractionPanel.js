import Button from '@mui/material/Button';
import { useRouter } from 'next/router';


function InteractionPanel(props) {
    let { interaction } = props;
    let { msg, btn, route, img } = interaction;
    let router = useRouter();

    let handleClick = () => {
        router.push(route);
    }
    
    return <div style={{textAlign: 'center', height: 'inherit'}}>
                <div style={{position: 'relative', top: '20rem', textAlign: 'center', color: 'white'}}>
            <h2>{msg}</h2>
            <Button variant="contained" onClick={() => handleClick()}>{btn}</Button>
                </div>
        <img src={img} style={{ width: '85%', height: 'inherit' }} />
           </div>

};

export default InteractionPanel;