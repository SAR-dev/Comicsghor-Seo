import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

import { List } from 'rsuite';

const AdminIndex = () => {
	return (
		<Layout>
			<Admin>
				<div className="container my-3">
					<h4 className="mb-3">Admin Dashboard</h4>
					<List bordered>
						<List.Item className="link-decoration-none">
							<Link href="/admin/crud/category-tag">Manage Category & Tags</Link>
						</List.Item>
						<List.Item className="link-decoration-none">
							<a href="/admin/crud/blog">Create a Post</a>
						</List.Item>
						<List.Item className="link-decoration-none">
							<Link href="/admin/crud/blogs">Manage Posts</Link>
						</List.Item>
					</List>
				</div>
			</Admin>
		</Layout>
	);
};

export default AdminIndex;
