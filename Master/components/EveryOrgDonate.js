import axios from 'axios';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import updateSession from '../../functions/updateSession';

function EveryOrgDonate({ donation}) {
    let identifier = undefined;
    console.log(donation.transaction.amount.final);
    let { ein, slug } = donation.org;
    ein !== undefined ?
        identifier = ein : identifier = slug;
    
    let router = useRouter();


    let handleClick = async () => {
        await updateSession('currentDonation', donation).then(data => {
            router.push(`https://staging.every.org/${identifier}?frequency=ONCE&first_name=helps&last_name=LLC&partner_donation_id=${donation._id}&email=helps@gmail.com&amount=${donation.transaction.amount.final * 5}&success_url=http://localhost:3000/master?isSuccess=true#donate`);
        }).catch(err => console.log(err));
    };
   
    return (
        <div style={{position: 'relative', top: '.75rem'}}>
            <Button variant="contained" onClick={() => handleClick()}>DONATE</Button>
        </div>
    )
};

export default EveryOrgDonate;