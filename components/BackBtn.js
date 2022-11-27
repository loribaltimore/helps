import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

function BackBtn(props) {
    let router = useRouter();

    return (
        <div>
            <Button variant="contained" onClick={() => router.back()}>Back</Button>
        </div>
    )
};

export default BackBtn;