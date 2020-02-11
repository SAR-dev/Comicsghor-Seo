import Topnav from './Topnav';

import 'rsuite/lib/styles/index.less';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';

const Layout = ({ children }) => {
	const styles = {
		backgroundColor: '#ebedf0',
		minHeight: '100vh'
	}
	return (
		<React.Fragment>
			<Container style={styles}>
				<Header>
					<Topnav />
				</Header>
				<div className="container px-3">
					<Container>
						<Content>{children}</Content>
					</Container>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default Layout;
