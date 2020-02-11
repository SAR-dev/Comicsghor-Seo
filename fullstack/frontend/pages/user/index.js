import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';

import { List } from 'rsuite';

const UserIndex = () => {
	return (
		<Layout>
			<Private>
				<div className="container my-3">
					<h4 className="mb-3">Private Dashboard</h4>
					<List bordered>
						<List.Item className="link-decoration-none">
							<Link href="/user/crud/category-tag">Manage Category & Tags</Link>
						</List.Item>
						<List.Item className="link-decoration-none">
							<a href="/user/crud/blog">Create a Post</a>
						</List.Item>
						<List.Item className="link-decoration-none">
							<Link href="/user/crud/blogs">Manage Posts</Link>
						</List.Item>
                        <List.Item className="link-decoration-none">
							<Link href="/user/update">Update Profile</Link>
						</List.Item>
					</List>
				</div>
			</Private>
		</Layout>
	);
};

export default UserIndex;