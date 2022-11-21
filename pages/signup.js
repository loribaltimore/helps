import UserInformation from '../signUp/components/UserInformation';
import SelectCauses from '../signUp/components/SelectCauses';
import UserAddress from '../signUp/components/UserAddress';
import UserContact from '../signUp/components/UserContact';
import UserAuth from '../signUp/components/UserAuth';
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
