import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

import AddPerson from "./components/AddPerson/AddPerson";
import ListPeople from "./components/ListPeople/ListPeople"

describe('Functions of Input Feilds', () => {
	it('Name should be text', () => {
		render(<AddPerson />);
		const name = screen.getByTestId('person-name-input');
		expect(name).toHaveAttribute('type', 'text');
	})
	it('Number should be Input type Number', () => {
		render(<AddPerson />);
		const number = screen.getByTestId('phone-number-input');
		expect(number).toHaveAttribute('type', 'number');
	})
	it('Email Input should be type of email', () => {
		render(<AddPerson />)
		const email = screen.getByTestId('person-email-input');
		expect(email).toHaveAttribute('type', 'email');
	})
})



describe('Test Content Load', () => {
	it('Initially no Contacts should be rendered', () => {
		const screen = render(<ListPeople />);
		const list = screen.getByTestId('list-people');
		expect(list.children.length).toBe(0);
	})
	it('Loads Contacts', () => {
		let contactsList = [
			{
				"name": "John",
				"number": 9876543210,
				"email": "John@example.com"
			},
			{
				"name": "Alex",
				"number": 9876543211,
				"email": "Alex@example.com"
			}
		]

		const screen = render(<ListPeople contacts={contactsList} />);
		const list = screen.queryByTestId('list-people');
		expect(list.children.length).toBe(2);
	})
})


describe('Validation of Inputs', () => {
	it('Check Form for correct Input and Add contact in the list', () => {
		render(<App />)
		const alertMock = jest.spyOn(window, 'alert').mockImplementation();
		const name = screen.getByTestId('person-name-input');
		const number = screen.getByTestId('phone-number-input');
		const email = screen.getByTestId('person-email-input');
		const button = screen.getByTestId('add-person-button');

		fireEvent.change(name, { target: { value: 'John' } });
		fireEvent.change(number, { target: { value: '9876543210' } });
		fireEvent.change(email, { target: { value: 'john@example.com' } });
		fireEvent.click(button);
		const list = screen.getByTestId('list-people');
		expect(list.children.length).toBe(1);
		expect(alertMock).toHaveBeenCalledWith('Successfully Added');

	})

	it('Check form for Invalid Input', () => {
		render(<App />)
		const alertMock = jest.spyOn(window, 'alert').mockImplementation();
		const name = screen.getByTestId('person-name-input');
		const number = screen.getByTestId('phone-number-input');
		const email = screen.getByTestId('person-email-input');
		const button = screen.getByTestId('add-person-button');

		fireEvent.change(name, { target: { value: 'John' } });
		fireEvent.change(number, { target: { value: '98765430' } });
		fireEvent.change(email, { target: { value: 'johnexample.com' } });
		fireEvent.click(button);
		const list = screen.getByTestId('list-people');
		expect(list.children.length).toBe(0);
		expect(alertMock).toHaveBeenCalledWith('Enter Valid Data');
	})

	it('Check form for Blank Input', () => {
		render(<App />)
		const alertMock = jest.spyOn(window, 'alert').mockImplementation();
		const name = screen.getByTestId('person-name-input');
		const number = screen.getByTestId('phone-number-input');
		const email = screen.getByTestId('person-email-input');
		const button = screen.getByTestId('add-person-button');

		fireEvent.change(name, { target: { value: '' } });
		fireEvent.change(number, { target: { value: '' } });
		fireEvent.change(email, { target: { value: '' } });
		fireEvent.click(button);
		const list = screen.getByTestId('list-people');
		expect(list.children.length).toBe(0);
		expect(alertMock).toHaveBeenCalledWith('Enter Valid Data');
	})


})
