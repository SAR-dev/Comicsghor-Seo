import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blog/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

import { Grid, Row, Col, List, Button } from 'rsuite';

const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {
	const head = () => (
		<Head>
			<title>Programming blogs | {APP_NAME}</title>
			<meta
				name="description"
				content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
			<meta
				property="og:description"
				content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
			/>
			<meta property="og:type" content="webiste" />
			<meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
			<meta property="og:site_name" content={`${APP_NAME}`} />

			<meta property="og:image" content={`${DOMAIN}/images/seoblog.jpg`} />
			<meta property="og:image:secure_url" ccontent={`${DOMAIN}/images/seoblog.jpg`} />
			<meta property="og:image:type" content="image/jpg" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	const [ limit, setLimit ] = useState(blogsLimit);
	const [ skip, setSkip ] = useState(0);
	const [ size, setSize ] = useState(totalBlogs);
	const [ loadedBlogs, setLoadedBlogs ] = useState([]);

	const loadMore = () => {
		let toSkip = skip + limit;
		listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setLoadedBlogs([ ...loadedBlogs, ...data.blogs ]);
				setSize(data.size);
				setSkip(toSkip);
			}
		});
	};

	const loadMoreButton = () => {
		return (
			size > 0 &&
			size >= limit && (
				<Button appearance='primary' block onClick={loadMore}>Load More</Button>
			)
		);
	};

	const showAllBlogs = () => {
		return blogs.map((blog, i) => {
			return (
				<article key={i}>
					<Card blog={blog} />
				</article>
			);
		});
    };
    
    const showLoadedBlogs = () => {
		return loadedBlogs.map((blog, i) => (
			<article key={i}>
				<Card blog={blog} />
			</article>
		));
	};

	const showAllCategories = () => {
		return categories.map((c, i) => (
			<List.Item key={i} index={i} className="menu-list">
				<Link href={`/categories/${c.slug}`}>
					<a className={`pl-2 ${router.pathname === `/${c.slug}` ? 'active-menu' : ''}`}>{c.name}</a>
				</Link>
			</List.Item>
		));
	};

	const showAllTags = () => {
		return tags.map((t, i) => (
			<List.Item key={i} index={i} className="menu-list">
				<Link href={`/tags/${t.slug}`}>
					<a className={`pl-2 ${router.pathname === `/${t.slug}` ? 'active-menu' : ''}`}>{t.name}</a>
				</Link>
			</List.Item>
		));
	};

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<main>
					<div className="container">
						<Grid fluid>
							<Row className="show-grid">
								<Col xs={6}>
									<div>
										<h6 className="pb-3">Categories</h6>
										<List bordered size="sm" className="mr-4 mb-3">
											{showAllCategories()}
										</List>
										<h6 className="pb-3">Tags</h6>
										<List bordered size="sm" className="mr-4">
											{showAllTags()}
										</List>
									</div>
								</Col>
								<Col xs={12}>
									<div>{showAllBlogs()}</div>
									<div>{showLoadedBlogs()}</div>
									<div>{loadMoreButton()}</div>
								</Col>
								<Col xs={6} />
							</Row>
						</Grid>
					</div>
				</main>
			</Layout>
		</React.Fragment>
	);
};

Blogs.getInitialProps = () => {
	let skip = 0;
	let limit = 2;
	return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
		if (data.error) {
			console.log(data.error);
		} else {
			return {
				blogs: data.blogs,
				categories: data.categories,
				tags: data.tags,
				totalBlogs: data.size,
				blogsLimit: limit,
				blogSkip: skip
			};
		}
	});
};

export default withRouter(Blogs);
