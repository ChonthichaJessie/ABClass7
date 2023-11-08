import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';

type UserFeedbackProps = {
	closeFeedback(): void,
}

export const UserFeedback = ({ closeFeedback }: UserFeedbackProps) => {
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
		<Container>
			<CloseRow>
				<WelcomeText>What can we improve</WelcomeText>
				<CloseButton onClick={closeFeedback}>x</CloseButton>
			</CloseRow>
			<Form >
				<Form.Field>
					<Name>
						<NameLabel>Name</NameLabel>
						<NameInput
							placeholder="Enter your Name"
							onChange={(e) => setName(e.target.value)}
						/>
					</Name>
				</Form.Field>
				<Form.Field>
					<Email>
						<EmailLabel>Email</EmailLabel>
						<EmailInput
							placeholder="Enter your Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Email>
				</Form.Field>
				<Form.Field>
					<Message>
						<MessageLabel>Message</MessageLabel>
						<MessageInput
							placeholder="Enter your message"
							onChange={(e) => setMessage(e.target.value)}
						/>
					</Message>
				</Form.Field>

				<Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

const CloseRow = styled.div`
    display: flex;
    flex-direction: row;
	justify-content: space-between;
    margin-bottom: 5px;
`;

const CloseButton = styled.span`
    font-size: 15pt;
    font-weight: 200;
`;

const WelcomeText = styled.header`
	font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 300;
    margin: 3px;	
`;

const Name = styled.div`
	display: flex;
	flex-direction: row;
`;

const Email = styled.div`
	display: flex;
	flex-direction: row;
`;

const Message = styled.div`
	display: flex;
	flex-direction: column;
`;

const NameLabel = styled.label`
	font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 300;
    margin: 3px;
	flex: 0;
`;

const NameInput = styled.input`
	flex: 1;
	margin-bottom: 5px;
`;

const EmailLabel = styled.label`
	font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 300;
    margin: 3px;
	flex: 0;
`;

const EmailInput = styled.input`
	flex: 1;
	margin-bottom: 5px;
`;

const MessageLabel = styled.label`
	font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 300;
    margin: 3px;
`;

const MessageInput = styled.textarea`
	height: 50px;
	margin-bottom: 5px;
`;


export default UserFeedback;