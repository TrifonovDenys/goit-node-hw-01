const fs = require("fs").promises;
const path = require("path");

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
}
async function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта.
  try {
    // const data = await fs.readFile(contactsPath, 'utf-8');
    // const contacts = JSON.parse(data)
    // contacts.push({ name: name, email: email, phone: phone })
    // console.log(contacts);
    console.log("addConact res = ", { name: name, email: email, phone: phone });
    return { name: name, email: email, phone: phone };
  } catch (err) {
    console.log(err.message);
  }
}

// addContact("Allen Raymond", "dui.in@egetlacus.ca", "(501) 472-5218")

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
