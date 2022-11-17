import Container from '@mui/material/Container';

function Cause(props) {
    let { cause } = props;

    return (
        <div>
            <div style={{ height: '3rem', width: '15rem', backgroundColor: 'darkgray', opacity: '50%' }}>
                <Container maxWidth="sm" style={{textAlign: 'center', position: 'relative', top: '30%'}}>
                    <h4 style={{}}>{cause}</h4>
                    </Container>
            </div>
        </div>
        
    )
};

export default Cause;