import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { userPublicProfile } from '../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import moment from 'moment';
// import ContactForm from '../../components/form/ContactForm';
import Img from 'react-image';
import ProfileBlogs from '../../components/blog/ProfileBlogs';

import { Grid, Row, Col, FlexboxGrid, Loader, Icon } from 'rsuite';
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem';

const UserProfile = ({ user, blogs, query }) => {
	const head = () => (
		<Head>
			<title>
				{user.username} | {APP_NAME}
			</title>
			<meta name="description" content={`Blogs by ${user.username}`} />
			<link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
			<meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
			<meta property="og:description" content={`Blogs by ${user.username}`} />
			<meta property="og:type" content="webiste" />
			<meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
			<meta property="og:site_name" content={`${APP_NAME}`} />

			<meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
			<meta property="og:image:type" content="image/jpg" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	const showUserBlogs = () => {
		return blogs.map((blog, i) => {
			return (
				<FlexboxGrid.Item colspan={24}>
					<ProfileBlogs blog={blog} />
				</FlexboxGrid.Item>
			);
		});
	};

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<Grid fluid>
					<Row className="show-grid">
						<Col xs={18}>
							<FlexboxGrid>
								<FlexboxGrid.Item colspan={24} className="text-center">
									<Img
										className="cover-photo"
										src={`https://i.imgur.com/${user.cover}h.jpg`}
										loader={<Loader size="md" />}
									/>
								</FlexboxGrid.Item>
								<FlexboxGrid.Item colspan={24} className="profile-photo">
									<Img
										src={`https://i.imgur.com/${user.avatar}h.jpg`}
										loader={<Loader size="md" />}
									/>
									{user.name}
								</FlexboxGrid.Item>
								<FlexboxGrid.Item colspan={24} className="my-3 pb-4 profile-about">
									<div className="profile-info px-4 py-3">
										<p>
											<Icon icon="code" className="mr-2" />
											{user.username}
										</p>
										<p>
											<Icon icon="user" className="mr-2" />
											{user.name}
										</p>
										<p>
											<Icon icon="envelope" className="mr-2" />
											{user.email}
										</p>
									</div>
									<p className="about-me">{user.about}</p>
								</FlexboxGrid.Item>
								<FlexboxGrid.Item colspan={24}>
									<FlexboxGrid justify="space-around">{showUserBlogs()}</FlexboxGrid>
								</FlexboxGrid.Item>
							</FlexboxGrid>
						</Col>
						<Col xs={6}>
							<FlexboxGrid justify="space-around">{showUserBlogs()}</FlexboxGrid>
						</Col>
					</Row>
				</Grid>
			</Layout>
			{/* {head()}
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h5>{user.name}</h5>
                                            <p className="text-muted">Joined {moment(user.createdAt).fromNow()}</p>
                                        </div>
                                        <div className="col-md-4">
                                            <img
                                                src={`${API}/user/photo/${user.username}`}
                                                className="img img-fluid img-thumbnail mb-3"
                                                style={{ maxHeight: '100px', maxWidth: '100%' }}
                                                alt="user profile"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />

                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-white">
                                        Recent blogs by {user.name}
                                    </h5>

                                    {showUserBlogs()}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-light">
                                        Message {user.name}
                                    </h5>
                                    <br />
                                    <ContactForm authorEmail={user.email} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout> */}
		</React.Fragment>
	);
};

UserProfile.getInitialProps = ({ query }) => {
	return userPublicProfile(query.username).then((data) => {
		if (data.error) {
			console.log(data.error);
		} else {
			return { user: data.user, blogs: data.blogs, query };
		}
	});
};

export default UserProfile;
