import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';

export const UserFeedback = ({ closeFeedback }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');



	const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { name, email, message };
		//Connection URL from sheet.best
		axios.post('https://sheet.best/api/sheets/112ec73a-9f55-40bd-8c9e-61eec97a8bad', objt)
			.then(response => {
				console.log(response);
			})
	}

	return (
		<Container fluid className="container">
			<button onClick={closeFeedback}>Close X</button>
			<Header as="h2">What can we improve</Header>
			<Form className="form">
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Enter your Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input
						placeholder="Enter your Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Message</label>
					<input
						placeholder="Enter your message"
						onChange={(e) => setMessage(e.target.value)}
					/>
				</Form.Field>

				<Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default UserFeedback;