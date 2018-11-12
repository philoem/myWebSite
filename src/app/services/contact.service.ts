import { Injectable } from '@angular/core';
import { Content } from '../models/content.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class ContactService {

    contacts: Content[] = [];
    contactsSubject = new Subject<Content[]>();

    constructor() {}

    emitContacts() {
        this.contactsSubject.next(this.contacts);
    }

    saveContacts() {
        firebase.database().ref('/contacts').update(this.contacts);
    }

    createNewContact(newContent: Content) {
        this.contacts.push(newContent);
        this.saveContacts();
        this.emitContacts();
    }

   

     


}