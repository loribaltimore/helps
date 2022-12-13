import {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logout from '../functions/logout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import loginGet from '../Login/functions/loginGet';
import { MainContext } from '../components/MainContext';
import { useContext } from 'react';

export default function UserMenu() {
  let {setFlash} = useContext(MainContext)
    let Router = useRouter();
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <AccountCircleOutlinedIcon style={{fontSize: '2rem', color: '#ff5757'}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={() => { handleClose(); Router.push('/logout') }}>Logout</MenuItem>
      </Menu>
    </div>
  );
};