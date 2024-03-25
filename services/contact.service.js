import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"

const STORAGE_KEY = "contactDB"

_createContacts()

export const contactService = {
  query,
  getById,
  save,
  remove,
  getEmptyContact,
  getDefaultFilter,
}

function query(filterBy = {}) {
  console.log("inside query")
  return storageService.query(STORAGE_KEY).then((contacts) => {
    if (filterBy.txt) {
      const regExp = new RegExp(filterBy.txt, "i")
      return contacts.filter((contact) => regExp.test(contact.txt))
    }
  })
}

function getById(contactId) {
  return storageService.get(STORAGE_KEY, contactId)
}

function remove(contactId) {
  return storageService.remove(STORAGE_KEY, contactId)
}

function save(contact) {
  if (contact._id) {
    return storageService.put(STORAGE_KEY, contact)
  } else {
    return storageService.post(STORAGE_KEY, contact)
  }
}

function getEmptyContact() {
  return {
    fullname: "",
    txt: "",
  }
}

function getDefaultFilter() {
  return { txt: "" }
}

function _createContact() {
  let contacts = utilService.loadFromStorage(STORAGE_KEY)
  if (!contacts || !contacts.length) {
    contacts = []
    contacts.push(_createContact("Plan a Mini Adventure"))
    contacts.push(_createContact("Write a Letter"))
    contacts.push(_createContact("Sleep"))
    contacts.push(_createContact("Buy gifts to kids"))
    contacts.push(_createContact("Learn new Words"))
    utilService.saveToStorage(STORAGE_KEY, contacts)
  }
}

function _createContact(txt = "") {
  contact.txt = txt
  contact._id = utilService.makeId()
  return contact
}
