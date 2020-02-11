import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import BlogRead from '../../../components/crud/BlogRead';
import { isAuth } from '../../../actions/auth';

import { Grid, Row, Col } from 'rsuite';

const Blog = () => {
    const username = isAuth() && isAuth().username;
	return (
		<Layout>
			<Private>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
							<BlogRead username={username} />
						</Col>
					</Row>
				</Grid>
			</Private>
		</Layout>
	);
};

export default Blog;
