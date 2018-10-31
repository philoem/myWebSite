import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Content } from 'src/app/models/content.model';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent implements OnInit {

  contentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
    const newContent = new Content(name, society, mail, suject, message);

    alert('Votre message a bien été enregistré !')
    
    //this.booksService.createNewBook(newBook);
    this.router.navigate(['/content/form']);
  }

}
