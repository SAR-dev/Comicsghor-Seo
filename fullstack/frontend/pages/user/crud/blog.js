import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import BlogCreate from '../../../components/crud/BlogCreate';

import { Grid, Row, Col } from 'rsuite';

const CreateBlog = () => {
	return (
		<Layout>
			<Private>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
							<BlogCreate />
						</Col>
					</Row>
				</Grid>
			</Private>
		</Layout>
	);
};

export default CreateBlog;
