import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';

const Private = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.replace(`/signin`);
        }
    }, []);
    return <React.Fragment>{children}</React.Fragment>;
};

export default Private;
