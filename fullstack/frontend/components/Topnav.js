import { signout, isAuth } from '../actions/auth';
import Router from 'next/router';
import Link from 'next/link';

import { Navbar, Nav, Button, Icon } from 'rsuite';

const Topnav = () => {
	return (
		<Navbar>
			<div className="container">
				<Navbar.Body>
					<Nav>
						<Nav.Item
							className="link-decoration-none"
							onClick={() => {
								Router.replace('/');
							}}
						>
							<Icon icon="home" />Home
						</Nav.Item>
						<Nav.Item
							className="link-decoration-none"
							onClick={() => {
								Router.replace('/blogs');
							}}
						>
							<Icon icon="book" />Posts
						</Nav.Item>

						{isAuth() && (
							<React.Fragment>
								<Nav.Item
									className="link-decoration-none"
									onClick={() => {
										Router.replace('/user/crud/blog');
									}}
								>
									<Icon icon="pencil" />Write
								</Nav.Item>
								<Nav.Item
									className="link-decoration-none"
									onClick={() => {
										Router.replace('/blogs/search');
									}}
								>
									<Icon icon="search" />Search
								</Nav.Item>
								<Nav.Item
									className="link-decoration-none"
									onClick={() => signout(() => Router.replace('/signin'))}
								>
									<Icon icon="sign-out" />Sign Out
								</Nav.Item>
							</React.Fragment>
						)}
						
						{!isAuth() && (
							<React.Fragment>
								<Nav.Item
									className="link-decoration-none"
									onClick={() => {
										Router.replace('/signin');
									}}
								>
									<Icon icon="sign-in" />Sign In
								</Nav.Item>
								<Nav.Item
									className="link-decoration-none"
									onClick={() => {
										Router.replace('/signup');
									}}
								>
									<Icon icon="user-plus" />Sign Up
								</Nav.Item>
							</React.Fragment>
						)}
					</Nav>
					<Nav pullRight>
						<React.Fragment>
							{isAuth() &&
							isAuth().role === 1 && (
								<Nav.Item
									className="link-decoration-none"
									onClick={() => {
										Router.replace('/admin');
									}}
								>
									<Icon icon="user-secret" />{`${isAuth().name}`}
								</Nav.Item>
							)}
							{isAuth() &&
							isAuth().role === 0 && (
								<Nav.Item
									className="link-decoration-none"
									onClick={() => {
										Router.replace('/user');
									}}
								>
									<Icon icon="user" />{`${isAuth().name}`}
								</Nav.Item>
							)}
						</React.Fragment>
					</Nav>
				</Navbar.Body>
			</div>
		</Navbar>
	);
};

export default Topnav;
