import Layout from '../components/Layout';
import SigninComponent from '../components/auth/SigninComponent';
import {withRouter} from 'next/router';
import { Notification } from 'rsuite';

const Signin = ({router}) => {
    const open = () => {
        Notification["warning"]({
            title: 'Warning',
            description: router.query.message
          });
    }
    return (
        <Layout>
            <SigninComponent />
            {router.query.message ? open() : ''}
        </Layout>
    )
}

export default withRouter(Signin);