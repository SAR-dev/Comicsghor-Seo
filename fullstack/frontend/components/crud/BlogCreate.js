import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { imageupload } from '../../actions/imgur';
import { getTags } from '../../actions/tag';
import { createBlog } from '../../actions/blog';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../helpers/quill';

import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	HelpBlock,
	TagPicker,
	FlexboxGrid,
	SelectPicker,
	Uploader,
	Icon,
	Loader,
	Button,
	ButtonToolbar,
	Modal
} from 'rsuite';

const BlogCreate = ({ router }) => {
	const blogFromLS = () => {
		if (typeof window === 'undefined') {
			return false;
		}

		if (localStorage.getItem('blog')) {
			return JSON.parse(localStorage.getItem('blog'));
		} else {
			return false;
		}
	};

	const [ categories, setCategories ] = useState([]);
	const [ tags, setTags ] = useState([]);

	const [ body, setBody ] = useState(blogFromLS());
	const [ values, setValues ] = useState({
		error: '',
		sizeError: '',
		success: '',
		formData: '',
		title: '',
		images: [],
		uploading: false
	});

	const { error, sizeError, success, formData, title, images, uploading } = values;
	const token = getCookie('token');

	useEffect(
		() => {
			setValues({ ...values, formData: new FormData() });
			initCategories();
			initTags();
		},
		[ router ]
	);

	const initCategories = () => {
		getCategories().then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				const items = [];
				data.forEach((item, i) => {
					items[i] = {
						key: i,
						value: item._id,
						label: item.name
					};
				});
				setCategories(items);
			}
		});
	};

	const initTags = () => {
		getTags().then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				const items = [];
				data.forEach((item, i) => {
					items[i] = {
						key: i,
						value: item._id,
						label: item.name
					};
				});
				setTags(items);
			}
		});
	};

	const publishBlog = (e) => {
		e.preventDefault();
		setValues({ ...values, uploading: true });
		createBlog(formData, token).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					...values,
					uploading: false,
					title: '',
					error: '',
					success: `A new blog titled "${data.title}" is created`
				});
				setBody('');
				setCategories([]);
				setTags([]);
				setThumbnail('');
			}
		});
	};

	const [ thumbnail, setThumbnail ] = useState([]);

	const handleChange = (name) => (e) => {
		const value = e;
		formData.set(name, value);
		setValues({ ...values, [name]: value, formData, error: '' });
	};

	const handleImage = (file, callback) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			callback(reader.result);
		};
		reader.readAsDataURL(file);
		formData.set('photo', file);
	};

	const [ fileInfo, setFileInfo ] = React.useState(null);

	const thumbnailStyles = {
		width: 300,
		height: 200,
		marginTop: 0
	};

	const handleImageArray = (event) => {
		setValues({ ...values, uploading: true });
		var fileInput = false;
		if (!event.target.files[0] || event.target.files[0].size > 19922944) {
			setValues({ ...values, error: 'Image size is too large!', uploading: false });
		}
		if (event.target.files[0]) {
			fileInput = true;
		}
		if (fileInput) {
			var img = event.target.files[0];
			imageupload(img).then((res) => {
				let imgArray = images;
				imgArray.push(res.data.id);
				setValues({ ...values, images: imgArray, uploading: false });
				formData.set('image', imgArray);
			});
		}
	};

	const deleteImage = (e, i) => {
		e.preventDefault();
		let imgArray = images;
		imgArray.splice(i, 1);
		setValues({ ...values, images: imgArray });
		formData.set('image', imgArray);
	};

	const handleBody = (e) => {
		setBody(e);
		formData.set('body', e);
		if (typeof window !== 'undefined') {
			localStorage.setItem('blog', JSON.stringify(e));
		}
	};

	const [ tempTags ] = useRef();

	const handleTagsChange = (e, { value }) => {
		formData.set('tags', e);
	};

	const [ tempCategories ] = useRef();

	const handleCategoriesChange = (e, { value }) => {
		formData.set('categories', e);
	};

	return (
		<React.Fragment>
			<div className="container my-4">
				<Form fluid onSubmit={publishBlog}>
					<FormGroup>
						<ControlLabel>
							<h6>Post Title</h6>
						</ControlLabel>
						<FormControl
							placeholder="Give an awesome title..."
							value={title}
							onChange={handleChange('title')}
						/>
						<HelpBlock>Required</HelpBlock>
					</FormGroup>
					<FormGroup>
						<ControlLabel>
							<h6>Post Body</h6>
						</ControlLabel>
						<ReactQuill
							modules={QuillModules}
							formats={QuillFormats}
							value={body}
							placeholder="Write something amazing..."
							onChange={handleBody}
						/>
						<HelpBlock>Required</HelpBlock>
					</FormGroup>
					<FormGroup>
						<FlexboxGrid>
							<FlexboxGrid.Item colspan={11}>
								<TagPicker
									block
									data={tags}
									value={tempTags}
									onChange={handleTagsChange}
									placeholder="Select Tags"
								/>
								<HelpBlock>Required</HelpBlock>
							</FlexboxGrid.Item>
							<FlexboxGrid.Item colspan={2} />
							<FlexboxGrid.Item colspan={11}>
								<SelectPicker
									block
									data={categories}
									value={tempCategories}
									onChange={handleCategoriesChange}
									placeholder="Select a Category"
								/>
								<HelpBlock>Required</HelpBlock>
							</FlexboxGrid.Item>
						</FlexboxGrid>
						<FlexboxGrid>
							<FlexboxGrid.Item colspan={10}>
								<ControlLabel>
									<h6 className="pt-3">Select Thumbnail</h6>
								</ControlLabel>
								<Uploader
									fileListVisible={false}
									listType="picture"
									onUpload={(file) => {
										handleImage(file.blobFile, (value) => {
											setFileInfo(value);
										});
									}}
								>
									<button style={thumbnailStyles} type="button">
										{fileInfo ? (
											<img src={fileInfo} className="thumbnail-image" />
										) : (
											<Icon icon="image" size="5x" />
										)}
									</button>
								</Uploader>
								<HelpBlock>Required</HelpBlock>
							</FlexboxGrid.Item>
						</FlexboxGrid>
					</FormGroup>
					<FormGroup>
						<FlexboxGrid.Item colspan={24}>
							<ControlLabel>
								<h6>Add Images</h6>
							</ControlLabel>
							<div className="imgur-uploader">
								<FlexboxGrid>
									{images.map((image, i) => {
										return (
											<FlexboxGrid.Item key={i}>
												<div
													className="add-image-grid"
													style={{
														display: 'grid',
														marginRight: '10px',
														marginBottom: '10px'
													}}
												>
													<img
														className="imgur-Image"
														src={`https://i.imgur.com/${image}m.png`}
														key={i}
													/>
													<Button color="red" size="xs" onClick={(e) => deleteImage(e, i)}>
														Delete
													</Button>
												</div>
											</FlexboxGrid.Item>
										);
									})}
									<FlexboxGrid.Item>
										<input
											onChange={handleImageArray}
											type="file"
											accept="image/*"
											className={uploading ? 'disabled-input' : ''}
										/>
										<Icon icon="upload" />
									</FlexboxGrid.Item>
								</FlexboxGrid>
							</div>
						</FlexboxGrid.Item>
						<HelpBlock>Optional</HelpBlock>
					</FormGroup>
					<FormGroup>
						<ButtonToolbar>
							<Button appearance="primary" block type="submit" disabled={uploading ? true : false}>
								Submit
							</Button>
						</ButtonToolbar>
					</FormGroup>
				</Form>
			</div>
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
					<Button onClick={() => Router.replace('/blogs')} appearance="primary">
						OK, Got it
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal backdrop="static" show={uploading} size="xs">
				<Modal.Body className="text-center">
					<Loader size="lg" />
					<h4 className="py-3">Uploading</h4>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default withRouter(BlogCreate);
