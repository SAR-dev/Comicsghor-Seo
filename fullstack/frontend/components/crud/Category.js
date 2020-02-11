import { useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getCategories, removeCategory } from '../../actions/category';

import {
	List,
	Button,
	Icon,
	IconButton,
	ButtonToolbar,
	Form,
	FormGroup,
	FormControl,
	Message,
	FlexboxGrid,
	Grid,
	Row,
	Col,
	Modal
} from 'rsuite';

const Category = () => {
	const [ values, setValues ] = useState({
		name: '',
		error: false,
		success: false,
		categories: [],
		removed: false,
		reload: false
	});

	const { name, error, success, categories, removed, reload } = values;
	const token = getCookie('token');

	useEffect(
		() => {
			loadCategories();
		},
		[ reload ]
	);

	const loadCategories = () => {
		getCategories().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setValues({ ...values, categories: data });
			}
		});
	};

	const showCategories = () => {
		return categories.map((c, i) => {
			return (
				<List.Item key={i} index={i}>
					<FlexboxGrid>
						<FlexboxGrid.Item colspan={18}>{c.name}</FlexboxGrid.Item>
						<FlexboxGrid.Item colspan={6}>
							<ButtonToolbar>
								<IconButton icon={<Icon icon="minus" />} onClick={() => deleteConfirm(c.slug)}>
									Remove
								</IconButton>
							</ButtonToolbar>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</List.Item>
			);
		});
	};

	const deleteConfirm = (slug) => {
		let answer = window.confirm('Are you sure you want to delete this category?');
		if (answer) {
			deleteCategory(slug);
		}
	};

	const deleteCategory = (slug) => {
		removeCategory(slug, token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
			}
		});
	};

	const clickSubmit = (e) => {
		e.preventDefault();
		create({ name }, token).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error, success: false });
			} else {
				setValues({ ...values, error: false, success: true, name: '', removed: false, reload: !reload });
			}
		});
	};

	const handleChange = (e) => {
		setValues({ ...values, name: e, error: false, success: false, removed: '' });
	};

	const newCategoryFom = () => (
		<Form fluid onSubmit={clickSubmit} className="py-3">
			<FormGroup>
				<FlexboxGrid>
					<FlexboxGrid.Item colspan={18}>
						<FormControl placeholder="Add a new category" value={name} onChange={handleChange} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item colspan={6}>
						<ButtonToolbar>
							<IconButton icon={<Icon icon="plus" />} type="submit" className="float-right">
								Add
							</IconButton>
						</ButtonToolbar>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</FormGroup>
		</Form>
	);

	const handleClose = () => {
		setValues({ ...values, error: false, success: false, removed: false });
	};

	return (
		<React.Fragment>
			<Grid fluid>
				<Row className="show-grid">
					<Col xs={24}>
						<Message
							showIcon
							type="info"
							title="Categories"
							description="Press enter or click ADD to add a category. Click REMOVE to remove it."
						/>
						{newCategoryFom()}
						<List bordered>{showCategories()}</List>
					</Col>
				</Row>
			</Grid>
			<Modal backdrop="static" show={error.length > 0 ? true : false} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>
						<Icon icon="warning" style={{ color: 'red' }} size="lg" className="pr-2" />
						Error
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>Category already exists!</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose} appearance="primary">
						OK, Got it
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal backdrop="static" show={success} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>
						<Icon icon="check" style={{ color: '#00a78e' }} size="lg" className="pr-2" />
						Successful
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>Category created successfully!</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose} appearance="primary">
						OK, Got it
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal backdrop="static" show={removed} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>
						<Icon icon="exclamation-circle" style={{ color: '#ffc845' }} size="lg" className="pr-2" />
						Successful
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>Category removed successfully!</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose} appearance="primary">
						OK, Got it
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
};

export default Category;
