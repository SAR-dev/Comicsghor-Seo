import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import { Grid } from 'semantic-ui-react';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';

const CategoryTag = () => {
	return (
		<Layout>
			<Admin>
				<Grid>
					<Grid.Row>
						<Grid.Column width={8}>
							<Category />
						</Grid.Column>
						<Grid.Column width={8}>
							<Tag />
                        </Grid.Column>
					</Grid.Row>
				</Grid>
			</Admin>
		</Layout>
	);
};

export default CategoryTag;
