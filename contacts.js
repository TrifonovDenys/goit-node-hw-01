const fs = require("fs").promises;

/* Раскомментируй и запиши значение */
const contactsPath = "./db/contacts.json";

// TODO: задокументировать каждую функцию
async function listContacts() {
  // ...твой код. Возвращает массив контактов.
  const list = await fs
    .readFile(contactsPath)
    .then((data) => JSON.parse(data))
    .then((res) => console.table(res))
    .catch((err) => console.log(err.message));
  return list;
}

// async function listContacts() {
//   try {
//     const data = await fs.readFile(contactsPath, "utf8"); // чтение файла асинхронно
//     const list = JSON.parse(data); // преобразование данных из JSON
//     return list;
//   } catch (err) {
//     console.error(err.message);
//     throw err; // выбросить ошибку, чтобы вызывающий код мог обработать ее
//   }
// }

async function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    const contact = contacts.find((contact) => contact.id === contactId);
    if (contact) {
      console.log(contact);
      return contact;
    } else {
      console.log(null);
      return null;
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    const contactIndex = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (contactIndex === -1) {
      console.log(null);
      return null;
    } else {
      console.log(contacts.splice(contactIndex, 1));
      // return contacts.splice(contactIndex, 1);
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
