import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogRead from '../../../components/crud/BlogRead';

import { Grid, Row, Col } from 'rsuite';

const Blog = () => {
	return (
		<Layout>
			<Admin>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
							<BlogRead />
						</Col>
					</Row>
				</Grid>
			</Admin>
		</Layout>
	);
};

export default Blog;
