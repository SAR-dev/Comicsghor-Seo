import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import Img from 'react-image';

import { Icon, TagGroup, Tag, Grid, Row, Col, Loader } from 'rsuite';

const Card = ({ blog }) => {
	const showBlogCategories = (blog) =>
		blog.categories.map((c, i) => (
			<Link key={i} href={`/categories/${c.slug}`}>
				<a className="small-category">{c.name}</a>
			</Link>
		));

	const showBlogTags = (blog) =>
		blog.tags.map((t, i) => (
			<Tag style={{ backgroundColor: '#ccc' }} key={i}>
				<Link href={`/tags/${t.slug}`}>
					<a className="small-tag">{t.name}</a>
				</Link>
			</Tag>
		));

	return (
		<div className="article-box my-3">
			<header>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
							{showBlogCategories(blog)}
							<Link href={`/blogs/${blog.slug}`}>
								<a>
									<h6>{blog.title}</h6>
								</a>
							</Link>
						</Col>
					</Row>
				</Grid>
			</header>
			<section>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
							<p className="writer">
								<Icon icon="user" className="pr-2" />
								<Link
									className="link-decoration-none"
									href={`/profile/${blog.postedBy.username}`}
								>
									<a>{blog.postedBy.username}</a>
								</Link>
								<Icon icon="calendar" className="px-2" /> {moment(blog.updatedAt).fromNow()}
							</p>
						</Col>
					</Row>
				</Grid>
			</section>

			<section>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={12}>
							<div className="blog-excerpt">
								{renderHTML(blog.excerpt)}
							</div>
						</Col>
						<Col xs={12} className="text-center">
							<Img
								className="blog-thumbnail"
								src={`${API}/blog/photo/${blog.slug}`}
								loader={<Loader size="md" />}
							/>
						</Col>
					</Row>
				</Grid>
			</section>

			<section>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24} className="tag-list-blog mt-2 pt-2">
							<TagGroup>{showBlogTags(blog)}</TagGroup>
						</Col>
					</Row>
				</Grid>
			</section>
		</div>
	);
};

export default Card;
