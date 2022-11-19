import UserInformation from '../components/UserInformation';
import SelectCauses from '../components/SelectCauses';
import UserAddress from '../components/UserAddress';
import UserContact from '../components/UserContact';
import UserAuth from '../components/UserAuth';
import { useState } from 'react';


function SignUp(props) {
    let [renderBio, setRenderBio] = useState(false);
    let [renderInterests, setRenderInterests] = useState(true);
    let [renderAddress, setRenderAddress] = useState(false);
    let [isBilling, setIsBilling] = useState(false);
    let [renderContact, setRenderContact] = useState(false);
    let [renderAuth, setRenderAuth] = useState(false);
    return (
        <div>
            {
                renderInterests === true ?
                    <SelectCauses setRenderBio={setRenderBio} setRenderInterests={setRenderInterests}/>: ''
            }
            {
                renderBio === true ?
                    <UserInformation setRenderBio={setRenderBio} setRenderAddress={setRenderAddress}/> : ''
            }
            {
                renderAddress === true ?
                    <UserAddress isBilling={isBilling} setIsBilling={setIsBilling} setRenderContact={setRenderContact} setRenderAddress={setRenderAddress}/> : ''
            }
            {
                renderContact === true ?
                    <UserContact setRenderAuth={setRenderAuth} setRenderContact={setRenderContact} /> : ''
            }
            {
                renderAuth === true ?
                    <UserAuth /> : ''
            }
            
            
        </div>
    )
};

export default SignUp;

///continue with create user,
//UserAddress => handleClick => setRenderAddress not working