import { useEffect, useState } from 'react';
import { Snackbar } from '@mui/material';
import SnackbarContent from '@mui/material/SnackbarContent';
import Slide from '@mui/material/Slide';

export default function SnackbarReusableComponent(props) {
    var snackbarProp = props.snackbarInfo;
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        Transition: Slide,
    });

    //Changing State dynamicaly using props..
    useEffect(() => {
        setSnackbarState({ ...props.snackbarState });
    }, [props.snackbarState]);

    return (
        <>
            <div>
                <Snackbar
                    open={snackbarState.open}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    onClose={() => setSnackbarState((pre) => { return { ...pre, open: false } })}
                    TransitionComponent={snackbarState.Transition}
                    autoHideDuration={2000}
                >
                    <SnackbarContent style={{ backgroundColor: snackbarProp.style }} message={snackbarProp.message} />
                </Snackbar>
            </div>
        </>
    )
}