import CoinTotal from '../Dashboard/components/CoinTotal';
import DonatedTo from '../Dashboard/components/DonatedTo';
import { MainContext } from '../components/MainContext';
import { useContext } from 'react';
import MembershipTier from '../Dashboard/components/MembershipTier';


function Dashboard(props) {
    let { currentUser } = useContext(MainContext);

    return (
        <div style={{ border: '1px solid black' }}>
            <h1>Dashboard</h1>
            <CoinTotal />
            <DonatedTo />
            {/* <MembershipTier /> */}

        </div>
    )

};


export default Dashboard;