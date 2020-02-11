import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import BlogUpdate from '../../../components/crud/BlogUpdate';

import { Grid, Row, Col } from 'rsuite';

const Blog = () => {
	return (
		<Layout>
			<Private>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
							<BlogUpdate />
						</Col>
					</Row>
				</Grid>
			</Private>
		</Layout>
	);
};

export default Blog;
