import axios from 'axios';
function Cause(props) {
    let { cause, setOrgs, orgs } = props;

    let handleClick = async () => {
        console.log('working')
         await axios({
            method: 'get',
             url: `http://localhost:3000/explore/charities/${cause}`,
         }).then(data => { console.log(data); setOrgs(data.data.nonprofits) }).catch(err => console.log(err));
    }

    return (
        <div style={{ border: '1px solid black', backgroundColor: 'lightblue', cursor: 'pointer' }}
            onClick={() => handleClick()}>
            <h2>{cause}</h2>
        </div>
    )
};

export default Cause;