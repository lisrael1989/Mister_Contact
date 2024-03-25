import { contactService } from '../../services/contact.service.js'
import { ADD_CONTACT, REMOVE_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from '../reducers/contact.reducer.js'
import { store } from '../store.js'


export function loadContacts(filterBy) {
    return contactService.query(filterBy)
        .then(Contacts => {
            store.dispatch({
                type: SET_CONTACTS,
                Contacts
            })
            return Contacts
        })
        .catch(err => {
            console.error('Cannot load Contacts:', err)
            throw err
        })
}


export function saveContact(contact) {
    const type = (contact._id) ? UPDATE_CONTACT : ADD_CONTACT
    return contactService.save(contact)
        .then(savedContact => {
            store.dispatch({
                type,
                contact: savedContact
            })
            return savedContact
        })
        .catch(err => {
            console.error('Cannot save contact:', err)
            throw err
        })
}

export function removecontact(contactId) {
    return contactService.removecontact(contactId)
        .then(() => {
            store.dispatch({
                type: REMOVE_CONTACT,
                contactId
            })
        })
        .catch(err => {
            console.error('Cannot remove contact:', err)
            throw err
        })
}


export function updatecontact(contact) {
    return contactService.save(contact)
        .then((savedcontact) => {
            store.dispatch({
                type: UPDATE_CONTACT,
                contact: savedcontact
            })
        })
}

