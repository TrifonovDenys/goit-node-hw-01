const func = require("./contacts");
// const argv = require("yargs").argv;
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
// console.log("list", func.listContacts());

// console.log("get", func.getContactById("AeHIrLTr6JkxGE6SN-0Rw"));

// console.log("remove", func.removeContact("AeHIrLTr6JkxGE6SN-0Rw"));

// console.log(
//   "add",
//   func.addContact("Allen Raymond", "dui.in@egetlacus.ca", "(501) 472-5218")
// );

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      func.listContacts()
      break;

    case "get":
      func.getContactById(id);
      break;

    case "add":
      func.addContact(name, email, phone);
      break;

    case "remove":
      func.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
