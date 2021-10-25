const fs = require("fs").promises;
const path = require("path");
const colors = require("colors");

const contactsPath = path.resolve("./db/contacts.json");
console.log(contactsPath);

async function listContacts() {
  await fs
    .readFile(contactsPath, "utf-8")
    .then((data) => {
      const contacts = JSON.parse(data);
      console.table(contacts);
      console.log(contacts);
    })
    .catch((error) => {
      console.error(`Произошла ошибка: ${error}`.red);
    });
}

async function getContactById(contactId) {
  await fs.readFile(contactsPath, "utf-8").then((data) => {
    const contacts = JSON.parse(data);
    contacts.find((contact) => {
      if (Number(contact.id) === Number(contactId)) {
        console.table(contact);
        return;
      }
    });
  });
}

function addContact(name, email, phone) {
    await fs.readFile(contactsPath, "utf-8").then((data) => {
        const contacts = JSON.parse(data);
}
// function removeContact(contactId) {
//   // ...твой код
// }


module.exports = {
  listContacts,
  getContactById,
};
