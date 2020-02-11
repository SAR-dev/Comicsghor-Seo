import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { singleBlog, listRelated } from '../../actions/blog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/blog/SmallCard';
import Img from 'react-image';
import Lightbox from 'react-image-lightbox';

import { Grid, Row, Col, Loader, Icon, TagGroup, Tag } from 'rsuite';

const SingleBlog = ({ blog, query }) => {
	const [ related, setRelated ] = useState([]);
	const [ imgur, setImgur ] = useState([]);
	const [ isOpen, setIsOpen ] = useState(false);
	const [ photoIndex, setPhotoIndex ] = useState(0);

	const loadRelated = () => {
		listRelated({ blog }).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setRelated(data);
			}
		});
	};

	useEffect(() => {
		blogImages();
		loadRelated();
	}, []);

	const head = () => (
		<Head>
			<title>
				{blog.title} | {APP_NAME}
			</title>
			<meta name="description" content={blog.mdesc} />
			<link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
			<meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
			<meta property="og:description" content={blog.mdesc} />
			<meta property="og:type" content="webiste" />
			<meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
			<meta property="og:site_name" content={`${APP_NAME}`} />

			<meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
			<meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
			<meta property="og:image:type" content="image/jpg" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	const showBlogCategories = (blog) =>
		blog.categories.map((c, i) => (
			<Link key={i} href={`/categories/${c.slug}`}>
				<a className="blog-category">{c.name}</a>
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

	const showRelatedBlog = () => {
		return related.map((blog, i) => (
			<article key={i}>
				<SmallCard blog={blog} />
			</article>
		));
	};

	const blogImages = () => {
		if (blog.image[0]) {
			let temp = [];
			blog.image[0].split(',').forEach((imgur, i) => {
				temp.push(`https://i.imgur.com/${imgur}h.png`);
			});
			setImgur(temp);
		}
		return;
	};

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<main>
					<article>
						<div className="container">
							<Grid fluid>
								<Row className="show-grid">
									<Col xs={5} />

									<Col xs={14}>
										<Grid fluid>
											<Row className="show-grid blog-post">
												<Col xs={24}>
													<h3 className="text-center">{blog.title}</h3>
													<div className="text-center">
														<Img
															className="blog-main-image"
															src={`${API}/blog/photo/${blog.slug}`}
															loader={<Loader size="lg" />}
														/>
													</div>
													<div className="text-center my-2 grey-text">
														<Icon icon="user" className="pr-2" /> {blog.postedBy.username}{' '}
														<Icon icon="calendar" className="px-2" />{' '}
														{moment(blog.updatedAt).fromNow()}
														{showBlogCategories(blog)}
														<TagGroup className="mt-1">{showBlogTags(blog)}</TagGroup>
													</div>
												</Col>
												<Col xs={24}>
													<div className="p-3">{renderHTML(blog.body)}</div>
												</Col>
												<Col xs={24}>
													<div className="imgur-gallery">
														{imgur.map((img, i) => (
															<img
																src={img}
																key={i}
																className="blog-imgur-image"
																onClick={() => setIsOpen(true)}
															/>
														))}
														{isOpen && (
															<Lightbox
																mainSrc={imgur[photoIndex]}
																nextSrc={imgur[(photoIndex + 1) % imgur.length]}
																prevSrc={
																	imgur[
																		(photoIndex + imgur.length - 1) % imgur.length
																	]
																}
																onCloseRequest={() => setIsOpen(false)}
																onMovePrevRequest={() =>
																	setPhotoIndex(
																		(photoIndex + imgur.length - 1) % imgur.length
																	)}
																onMoveNextRequest={() =>
																	setPhotoIndex((photoIndex + 1) % imgur.length)}
															/>
														)}
													</div>
												</Col>
											</Row>
										</Grid>
									</Col>

									<Col xs={5}>{showRelatedBlog()}</Col>
								</Row>
							</Grid>
						</div>
					</article>
				</main>
			</Layout>
		</React.Fragment>
	);
};

SingleBlog.getInitialProps = ({ query }) => {
	return singleBlog(query.slug).then((data) => {
		if (data.error) {
			console.log(data.error);
		} else {
			// console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
			return { blog: data, query };
		}
	});
};

export default SingleBlog;
