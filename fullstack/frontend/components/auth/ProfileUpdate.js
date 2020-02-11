import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser } from '../../actions/auth';
import { getProfile, update } from '../../actions/user';
import { API } from '../../config';
import { imageupload } from '../../actions/imgur';

import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	HelpBlock,
	Grid,
	Row,
	Col,
	SelectPicker,
	Button,
	FlexboxGrid,
	Icon,
	Modal,
	Loader
} from 'rsuite';
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem';

const ProfileUpdate = () => {
	const [ values, setValues ] = useState({
		username: '',
		name: '',
		email: '',
		avatar: '',
		cover: '',
		about: '',
		blood: '',
		contact: '',
		address: '',
		password: '',
		error: false,
		success: false,
		loading: false,
		photo: '',
		userData: ''
	});

	const token = getCookie('token');
	const {
		username,
		name,
		email,
		avatar,
		cover,
		about,
		blood,
		contact,
		address,
		password,
		error,
		success,
		loading,
		photo,
		userData
	} = values;

	const init = () => {
		getProfile(token).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					...values,
					username: data.username,
					name: data.name,
					email: data.email,
					avatar: data.avatar,
					cover: data.cover,
					about: data.about,
					blood: data.blood,
					contact: data.contact,
					address: data.address,
					userData: new FormData()
				});
			}
		});
	};

	useEffect(() => {
		init();
	}, []);

	const [ bloodGroups, setBloodGroups ] = useState([
		{ label: 'A+', value: 'A+' },
		{ label: 'A-', value: 'A-' },
		{ label: 'B+', value: 'B+' },
		{ label: 'B-', value: 'B-' },
		{ label: 'AB+', value: 'AB+' },
		{ label: 'AB-', value: 'AB-' },
		{ label: 'O+', value: 'O+' },
		{ label: 'O-', value: 'O-' }
	]);

	const handleChange = (name) => (e) => {
		const value = e;
		userData.set(name, value);
		setValues({ ...values, [name]: value, userData: userData, error: false, success: false });
	};

	const handleBloodChange = (e, { value }) => {
		userData.set('blood', e);
		setValues({ ...values, blood: e });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValues({ ...values, loading: true });
		update(token, userData).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error, success: false, loading: false });
			} else {
				updateUser(data, () => {
					updateUser(data, () => {
						setValues({
							...values,
							username: data.username,
							name: data.name,
							email: data.email,
							avatar: data.avatar,
							cover: data.cover,
							about: data.about,
							password: '',
							blood: data.blood,
							contact: data.contact,
							address: data.address,
							success: 'Profile has been updated successfully',
							loading: false
						});
					});
				});
			}
		});
	};

	const handleCoverUpload = (event) => {
		setValues({ ...values, loading: true });
		var fileInput = false;
		if (!event.target.files[0] || event.target.files[0].size > 19922944) {
			setValues({ ...values, error: 'Image size is too large!', loading: false });
		}
		if (event.target.files[0]) {
			fileInput = true;
		}
		if (fileInput) {
			var img = event.target.files[0];
			imageupload(img).then((res) => {
				setValues({ ...values, cover: res.data.id, loading: false });
				userData.set('cover', res.data.id);
			});
		}
	};

	const handleAvatarUpload = (event) => {
		setValues({ ...values, loading: true });
		var fileInput = false;
		if (!event.target.files[0] || event.target.files[0].size > 19922944) {
			setValues({ ...values, error: 'Image size is too large!', loading: false });
		}
		if (event.target.files[0]) {
			fileInput = true;
		}
		if (fileInput) {
			var img = event.target.files[0];
			imageupload(img).then((res) => {
				setValues({ ...values, avatar: res.data.id, loading: false });
				userData.set('avatar', res.data.id);
			});
		}
	};

	return (
		<React.Fragment>
			<Grid fluid>
				<Row className="show-grid my-3">
					<Col xs={24}>
						<Form fluid onSubmit={handleSubmit}>
							<FlexboxGrid>
								<FlexboxGrid.Item colspan={12}>
									<FlexboxGrid>
										<FlexboxGridItem colspan={24} className="cover-upload my-3">
											{cover && <img src={`https://i.imgur.com/${cover}m.png`} />}
											<div className="upload-icon">
												<input
													onChange={handleCoverUpload}
													type="file"
													accept="image/*"
													className={loading ? 'disabled-input' : ''}
												/>
												<span>Upload Cover Photo</span>
											</div>
										</FlexboxGridItem>
										<FlexboxGridItem colspan={24} className="avatar-upload my-3">
											{cover && <img src={`https://i.imgur.com/${avatar}m.png`} />}
											<div className="upload-icon">
												<input
													onChange={handleAvatarUpload}
													type="file"
													accept="image/*"
													className={loading ? 'disabled-input' : ''}
												/>
												<span>Upload Your Avatar</span>
											</div>
										</FlexboxGridItem>
									</FlexboxGrid>
								</FlexboxGrid.Item>
								<FlexboxGrid.Item colspan={12}>
									<FormGroup>
										<ControlLabel>Username</ControlLabel>
										<FormControl autoComplete="off" value={username} onChange={handleChange('username')} />
										<HelpBlock>Required</HelpBlock>
									</FormGroup>
									<FormGroup>
										<ControlLabel>Full Name</ControlLabel>
										<FormControl autoComplete="off" value={name} onChange={handleChange('name')} />
										<HelpBlock>Required</HelpBlock>
									</FormGroup>
									<FormGroup>
										<ControlLabel>Email</ControlLabel>
										<FormControl autoComplete="off" value={email} onChange={handleChange('email')} />
										<HelpBlock>Required</HelpBlock>
									</FormGroup>
									<FormGroup>
										<ControlLabel>About</ControlLabel>
										<FormControl
											placeholder="Write about yourself"
											componentClass="textarea"
											rows={5}
											value={about}
											onChange={handleChange('about')}
										/>
									</FormGroup>
									<FormGroup>
										<SelectPicker
											block
											data={bloodGroups}
											value={blood}
											onChange={handleBloodChange}
											placeholder="Blood Group"
										/>
									</FormGroup>
									<FormGroup>
										<ControlLabel>Contact No</ControlLabel>
										<FormControl autoComplete="off" value={contact} onChange={handleChange('contact')} />
									</FormGroup>
									<FormGroup>
										<ControlLabel>Address</ControlLabel>
										<FormControl autoComplete="off" value={address} onChange={handleChange('address')} />
									</FormGroup>
									<FormGroup>
										<ControlLabel>Password</ControlLabel>
										<FormControl
											autoComplete="off"
											value={password}
											type="password"
											onChange={handleChange('password')}
										/>
									</FormGroup>
								</FlexboxGrid.Item>
							</FlexboxGrid>

							<Button
								appearance="primary"
								block
								type="submit"
								className="my-3"
								disabled={
									name.length === 0 || username.length === 0 || email.length === 0 ? true : false
								}
							>
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Grid>
			<Modal
				backdrop="static"
				show={error.length > 0 ? true : false}
				onHide={() => setValues({ ...values, error: '' })}
			>
				<Modal.Header>
					<Modal.Title>
						<Icon icon="exclamation-circle" style={{ color: '#ffc845' }} size="lg" className="pr-2" />
						Error Occured
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>{error}</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setValues({ ...values, error: '' })} appearance="primary">
						OK, Got it
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal backdrop="static" show={success.length > 0 ? true : false} onHide={() => Router.replace('/blogs')}>
				<Modal.Header>
					<Modal.Title>
						<Icon icon="check" style={{ color: '#00a78e' }} size="lg" className="pr-2" />
						Successful
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>{success}</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setValues({ ...values, success: false })} appearance="primary">
						OK, Got it
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal backdrop="static" show={loading} size="xs">
				<Modal.Body className="text-center">
					<Loader size="lg" />
					<h4 className="py-3">Uploading</h4>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default ProfileUpdate;
