import { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../../actions/auth';
import Link from 'next/link';
import Router from 'next/router';

import {
	Form,
	FormGroup,
	FormControl,
	HelpBlock,
	Icon,
	Button,
	ButtonToolbar,
	Grid,
	Row,
	Col,
	Modal,
	Loader
} from 'rsuite';

const SigninComponent = () => {
	const [ values, setValues ] = useState({
		email: '',
		password: '',
		error: false,
		checking: false,
		message: false,
		showForm: true
	});

	const { email, password, error, checking, message } = values;

	useEffect(() => {
		isAuth() && Router.replace('/');
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setValues({ ...values, checking: true, error: false });
		const user = { email, password };

		signin(user).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				authenticate(data, () => {
					setValues({
						...values,
						email: '',
						password: '',
						checking: false,
						error: false,
						message: true
					});
				});
			}
		});
	};

	const handleChange = (name) => (e) => {
		setValues({ ...values, error: false, [name]: e });
	};

	const handleClose = () => {
		setValues({ ...values, error: '' });
	};

	const pushHome = () => {
		setValues({ ...values, message: '' });
		if (isAuth() && isAuth().role === 1) {
			Router.replace('/admin');
		} else {
			Router.replace('/user');
		}
	};

	return (
		<React.Fragment>
			<Grid fluid>
				{checking && <Loader backdrop content="loading..." vertical size="lg" />}
				<Row className={`show-grid ${checking ? 'modal-back' : ''}`}>
					<Col xs={12} />
					<Col xs={12}>
						<div className="text-center">
							<img style={{ maxWidth: '100px' }} src="/images/comicsghor.png" />
						</div>
						<div className="py-3">
							<h4 className="text-center">Welcome to Comics Ghor</h4>
							<h6 className="text-center">Fill out the form below to sign in to your existing account</h6>
						</div>
						<div>
							<Form fluid onSubmit={handleSubmit}>
								<FormGroup>
									<FormControl
										placeholder="Email"
										name="email"
										type="email"
										value={email}
										onChange={handleChange('email')}
										autoComplete="off"
									/>
									<HelpBlock>
										{/\S+@\S+\.\S+/.test(email) ? (
											<span>
												<Icon icon="check" style={{ color: 'green' }} /> Email address seems
												valid
											</span>
										) : (
											<span>
												<Icon icon="close" style={{ color: 'red' }} /> Provide a valid email
												address
											</span>
										)}
									</HelpBlock>
								</FormGroup>
								<FormGroup>
									<FormControl
										placeholder="Password"
										name="password"
										type="password"
										value={password}
										onChange={handleChange('password')}
									/>
									<HelpBlock>
										{password.length < 6 ? (
											<span>
												<Icon icon="close" style={{ color: 'red' }} /> Weak password
											</span>
										) : (
											<span>
												<Icon icon="check" style={{ color: 'green' }} /> Password seems valid
											</span>
										)}
									</HelpBlock>
								</FormGroup>
								<FormGroup>
									<ButtonToolbar>
										<Button appearance="primary" type="submit">
											<Icon icon="send" /> Submit
										</Button>
									</ButtonToolbar>
								</FormGroup>
							</Form>
							<h6 className="text-center py-2">
								Don't have an account? <Link href="/signup">Sign Up</Link>
							</h6>
						</div>
					</Col>
				</Row>
			</Grid>
			<Modal backdrop="static" show={error.length > 0 ? true : false} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>
						<Icon icon="exclamation-circle" style={{ color: '#ffc845' }} size="lg" className="pr-2" />
						Sign In Error
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>{error}</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose} appearance="primary">
						OK, Got it
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal backdrop="static" show={message} onHide={pushHome}>
				<Modal.Header>
					<Modal.Title>
						<Icon icon="check" style={{ color: '#00a78e' }} size="lg" className="pr-2" />
						Sign In Successful
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					You have signed in successfully. Do not share your sign-in credentials with others.
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={pushHome} appearance="primary">
						OK, Got it
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
};

export default SigninComponent;
