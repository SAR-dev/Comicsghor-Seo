import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { singleTag } from '../../actions/tag';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';

import { Grid, Row, Col } from 'rsuite';

const Tag = ({ tag, blogs, query }) => {
	const head = () => (
		<Head>
			<title>
				{tag.name} | {APP_NAME}
			</title>
			<meta name="description" content={`Best programming tutorials on ${tag.name}`} />
			<link rel="canonical" href={`${DOMAIN}/tags/${query.slug}`} />
			<meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
			<meta property="og:description" content={`Best programming tutorials on ${tag.name}`} />
			<meta property="og:type" content="webiste" />
			<meta property="og:url" content={`${DOMAIN}/tags/${query.slug}`} />
			<meta property="og:site_name" content={`${APP_NAME}`} />

			<meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
			<meta property="og:image:type" content="image/jpg" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<main>
					<div className="conteiner">
						<header>
							<Grid fluid>
								<Row className="show-grid">
									<h1>{tag.name}</h1>
									{blogs.map((b, i) => (
										<Col xs={12}>
											<Card key={i} blog={b} />
										</Col>
									))}
								</Row>
							</Grid>
						</header>
					</div>
				</main>
			</Layout>
		</React.Fragment>
	);
};

Tag.getInitialProps = ({ query }) => {
	return singleTag(query.slug).then((data) => {
		if (data.error) {
			console.log(data.error);
		} else {
			return { tag: data.tag, blogs: data.blogs, query };
		}
	});
};

export default Tag;
