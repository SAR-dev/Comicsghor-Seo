import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';

import { Grid, Row, Col } from 'rsuite';

const Blog = () => {
	return (
		<Layout>
			<Admin>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
							<BlogCreate />
						</Col>
					</Row>
				</Grid>
			</Admin>
		</Layout>
	);
};

export default Blog;
