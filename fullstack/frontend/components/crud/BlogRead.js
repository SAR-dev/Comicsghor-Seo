import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog } from '../../actions/blog';
import moment from 'moment';

import { Grid, Row, Col, ButtonToolbar, Button, Icon, FlexboxGrid, Notification, Modal  } from 'rsuite';

const BlogRead = ({ username }) => {
	const [ blogs, setBlogs ] = useState([]);
	const [ message, setMessage ] = useState('');
	const token = getCookie('token');

	useEffect(() => {
		loadBlogs();
	}, []);

	const loadBlogs = () => {
		list(username).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setBlogs(data);
			}
		});
	};

	const deleteBlog = (slug) => {
		removeBlog(slug, token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setMessage(data.message);
				loadBlogs();
				open(data.message)
			}
		});
	};

	const open = (msg) => {
		Notification['success']({
		  title: 'Success',
		  description: msg
		});
	  }

	const deleteConfirm = (slug) => {
		let answer = window.confirm('Are you sure you want to delete your blog?');
		if (answer) {
			deleteBlog(slug);
		}
	};

	const showUpdateButton = (blog) => {
		if (isAuth() && isAuth().role === 0) {
			return (
				<Button size="sm" onClick={() => Router.push(`/user/crud/${blog.slug}`)}>
					<Icon icon="edit2" /> Edit
				</Button>
			);
		} else if (isAuth() && isAuth().role === 1) {
			return (
				<Button size="sm" onClick={() => Router.push(`/admin/crud/${blog.slug}`)}>
					<Icon icon="edit2" /> Edit
				</Button>
			);
		}
	};

	const showAllBlogs = () => {
		return blogs.map((blog, i) => {
			return (
				<FlexboxGrid key={i} className="manage-blog px-3 py-2 mb-2">
					<FlexboxGrid.Item colspan={18}>
						<h4>{blog.title}</h4>
						<p className="writer grey-text">
							<Icon icon="user" className="pr-2" /> {blog.postedBy.name}{' '}
							<Icon icon="calendar" className="px-2" /> {moment(blog.updatedAt).fromNow()}
						</p>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item colspan={6}>
						<ButtonToolbar>
							<Button size="sm" onClick={() => deleteConfirm(blog.slug)}>
								<Icon icon="trash" /> Delete
							</Button>
							{showUpdateButton(blog)}
						</ButtonToolbar>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			);
		});
	};

	return (
		<React.Fragment>
			<div className="container my-3">
				<Grid fluid>
					<Row className="show-grid">{showAllBlogs()}</Row>
				</Grid>
				<Modal backdrop="static" show={message.length > 0 ? true : false} onHide={() => setMessage('')}>
				<Modal.Header>
					<Modal.Title>
						<Icon icon="info" style={{ color: '#0099e5' }} size="lg" className="pr-2" />
						Message
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>{message}</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setMessage('')} appearance="primary">
						OK, Got it
					</Button>
				</Modal.Footer>
			</Modal>
			</div>
		</React.Fragment>
	);
};

export default BlogRead;
