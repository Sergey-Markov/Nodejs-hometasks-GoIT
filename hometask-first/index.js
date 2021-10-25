const argv = require("yargs").argv;
const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      await contacts.listContacts();
      break;

    case "get":
      await contacts.getContactById(id);
      break;

    case "add":
      // ... name email phone
      break;

    // case "remove":
    //   // ... id
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// contactsInterfase.listContacts();
console.log(`Сервер запущен успешно`);
