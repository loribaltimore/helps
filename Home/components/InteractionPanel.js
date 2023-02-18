import Button from '@mui/material/Button';
import { useRouter } from 'next/router';


function InteractionPanel(props) {
    let { interaction } = props;
    let { msg, btn, route, img } = interaction;
    let router = useRouter();

    let handleClick = () => {
        router.push(route);
    }
    
    return <div style={{ textAlign: 'center', border: '1px solid black', borderRadius: '2rem', backgroundColor: 'white', width: '90%' }}>
                <div style={{position: 'relative', top: '20rem', textAlign: 'center', color: 'white'}}>
            <h2>{msg}</h2>
            <Button variant="contained" onClick={() => handleClick()}>{btn}</Button>
                </div>
                <img src={img} style={{height: '10rem', width: '85%', position: 'relative', left: '0%', height: 'auto' }} />
           </div>

};

export default InteractionPanel;