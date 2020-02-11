import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import Img from 'react-image';

import { Icon, Grid, Row, Col, Loader } from 'rsuite';

const SmallCard = ({ blog }) => {
	return (
		<div className="article-box mb-2">
			<header>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24}>
							<Link href={`/blogs/${blog.slug}`}>
								<a>
									<span style={{ fontSize: 12 }}>{blog.title}</span>
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
								<Icon icon="user" className="pr-2" />{' '}
								<Link className="link-decoration-none" href={`/profile/${blog.postedBy.username}`}>
									<a>{blog.postedBy.username}</a>
								</Link>
							</p>
							<p className="writer">
								<Icon icon="calendar" className="px-2" /> {moment(blog.updatedAt).fromNow()}
							</p>
						</Col>
					</Row>
				</Grid>
			</section>

			<section>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={24} className="text-center mt-2">
							<Img
								className="blog-thumbnail"
								src={`${API}/blog/photo/${blog.slug}`}
								loader={<Loader size="md" />}
							/>
						</Col>
					</Row>
				</Grid>
			</section>
		</div>
	);
};

export default SmallCard;
