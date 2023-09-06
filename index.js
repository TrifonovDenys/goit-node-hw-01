const func = require("./contacts");
const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const table = await func.listContacts();
      console.table(table);
      break;

    case "get":
      const oneContact = await func.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await func.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await func.removeContact(id);
      console.log(typeof removeContact);
      console.log(removeContact);
      break;

    case "update":
      const updateContact = await func.updateContact(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
