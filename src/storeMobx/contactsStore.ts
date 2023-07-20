import { makeAutoObservable } from 'mobx'
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsStore = makeAutoObservable({
    contacts: [] as ContactDto[],
    contactsListLoaded(state: ContactDto[]) {
        contactsStore.contacts = state;
    },
    getContactById(id: ContactDto['id']) {
        return contactsStore.contacts.find((item) => item.id === id)
    }
})