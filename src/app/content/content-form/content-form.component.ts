import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Content } from 'src/app/models/content.model';
import { ContactService } from 'src/app/services/contact.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent implements OnInit {

  contentForm: FormGroup;
  isAvalaible = false;
   
  constructor(private formBuilder: FormBuilder, private router: Router, private contactsService: ContactService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contentForm = this.formBuilder.group({
      name: ['', Validators.required],
      society: ['', Validators.required],
      mail: ['', Validators.required],
      suject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  

  onSaveContentForm() {
    const name = this.contentForm.get('name').value;
    const society = this.contentForm.get('society').value;
    const mail = this.contentForm.get('mail').value;
    const suject = this.contentForm.get('suject').value;
    const message = this.contentForm.get('message').value;
    const date = Date();
    const newContent = new Content(name, society, mail, suject, message, date);
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${mail}">${mail}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    let formRequest = { name, mail, message, date, html };
    //if(this.contentForm.valid) {
      firebase.database().ref('/messages').push(formRequest);
    
      this.contactsService.createNewContact(newContent);
      this.router.navigate(['/content/form']);
      this.isAvalaible = true;
    //}

    this.contentForm.reset();

  }
  

}
