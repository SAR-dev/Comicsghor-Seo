import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogUpdate from '../../../components/crud/BlogUpdate';

import { Grid, Row, Col } from 'rsuite';

const Blog = () => {
	return (
		<Layout>
			<Admin>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
							<BlogUpdate />
						</Col>
					</Row>
				</Grid>
			</Admin>
		</Layout>
	);
};

export default Blog;
