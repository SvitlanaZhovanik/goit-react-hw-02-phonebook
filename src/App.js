import { Component } from 'react';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import { FcAbout } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Title } from './App.styled.js';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const normalizeName = contact.name.toLowerCase();
    if (this.state.contacts.some(item => item.name.toLowerCase() === normalizeName)) {
      return toast(`${contact.name} is already in your contacts`, { icon: <FcAbout /> });
    }
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  handleFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };
  render() {
    const { filter } = this.state;
    const filteredContacts = this.getVisibleContacts();
    return (
      <Container>
        <ToastContainer position="bottom-left" theme="dark" />
        <Title>Phonebook</Title>
        <Form onChange={this.addContact} />
        <Section name="Contacts">
          <Filter value={filter} onChange={this.handleFilter} />
          <ContactsList contacts={filteredContacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
