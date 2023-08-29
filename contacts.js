

const fs = require("fs").promises;
// const fs = require('fs');
fs.readFile("contacts.js").then((data) => console.log(data.toString()));

/*
 * Раскомментируй и запиши значение */
const contactsPath = './db/contacts.json';


// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код. Возвращает массив контактов.
  fs.readFile(contactsPath)
    .then(data => console.log(data.toString()))
    .catch(err => console.log(err.message))
}

async function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.

  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data)
    const contact = contacts.find(contact => contact.id === contactId)
    if (contact) {
      console.log(contact);
      return contact
    } else {
      console.log(null);
      return null
    }
  } catch(err) {
    console.log(err.message)
  }
}



async function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.

  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data)
    const contactIndex = contacts.findIndex(contact => contact.id === contactId)
    if (contactIndex === -1) {
      console.log(null);
      return null
    }
    else {
      console.log(contacts.splice(contactIndex, 1));
      // return await fs.writeFile(contactsPath, JSON.stringify(contacts))
    }
  } catch (err) {
    console.log(err.message);
  }
}


async function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта. 
  
  
  try {
    // const data = await fs.readFile(contactsPath, 'utf-8');
    // const contacts = JSON.parse(data)
    // contacts.push({ name: name, email: email, phone: phone })
    // console.log(contacts);
    return { name: name, email: email, phone: phone }
  } catch (err) {
    console.log(err.message);
  }
}


addContact("Allen Raymond", "dui.in@egetlacus.ca", "(501) 472-5218")

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};