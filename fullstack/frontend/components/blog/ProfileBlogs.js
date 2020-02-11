import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import Img from 'react-image';

import { Icon, TagGroup, Tag, Grid, Row, Col, Loader } from 'rsuite';

const ProfileBlogs = ({ blog }) => {

	return (
		<div className="article-box mb-3">
			<header>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
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
								<Icon icon="calendar" /> {moment(blog.updatedAt).fromNow()}
							</p>
						</Col>
					</Row>
				</Grid>
			</section>

			<section>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
							<div className="blog-excerpt">{renderHTML(blog.excerpt)}</div>
						</Col>
					</Row>
				</Grid>
			</section>
		</div>
	);
};

export default ProfileBlogs;
