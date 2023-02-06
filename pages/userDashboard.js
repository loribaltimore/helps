import CoinTotal from '../Dashboard/components/CoinTotal';
import DonatedTo from '../Dashboard/components/DonatedTo';
import { MainContext } from '../components/MainContext';
import { useContext } from 'react';
import MembershipTier from '../Dashboard/components/MembershipTier';


function Dashboard({currentUser}) {
    console.log(currentUser);
    return (
        <div style={{ border: '1px solid black' }}>
            <h1>Dashboard</h1>
            <CoinTotal currentUser={currentUser}/>
            <DonatedTo currentUser={currentUser} />
            {/* <MembershipTier /> */}
        </div>
    )

};

Dashboard.getInitialProps = async (ctxt) => {
    let { req } = ctxt;
    return {currentUser: req.user}
};


export default Dashboard;