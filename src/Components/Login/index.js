import React from 'react'
import { ReactComponent as LoginLogo } from '../../assets/login.svg';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
    const [snackBarOpen, setSnackBarOpen] = React.useState(false);
    const [address, setAddress] = React.useState(null);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };

    const handleWallet = (event) => {
        if (!window.ethereum) {
            setSnackBarOpen(true);
        }
        else {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(res => {
                    setAddress(res[0]);
                })
        }
    }
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-10">
            <LoginLogo />

            {address === null ? <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 w-60 rounded"
                onClick={handleWallet}
            >
                Connect Your Wallet
            </button> : <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md  w-1/3" role="alert">
                <div className="flex">
                    <div className="py-1"><svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div>
                        <p className="font-bold">Your wallet address is:</p>
                        <p className="text-base">{address}</p>
                    </div>
                </div>
            </div>}

            <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    No wallet extension detected on your browser!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Login
