const fs = require("fs").promises;
const path = require("path");
const {nanoid} = require('nanoid')
const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  // ...твой код. Возвращает массив контактов.
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  return result || null;
}

async function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  if (result) {
    const resultID = contacts.findIndex((contact) => contact.id === contactId);
    contacts.splice(resultID, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return result
  }
  return null
}

async function addContact(name,email, phone) {
  // ...твой код. Возвращает объект добавленного контакта.
  const contacts = await listContacts()
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone
  }
  contacts.push(newContact)
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
  return newContact
} 


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
