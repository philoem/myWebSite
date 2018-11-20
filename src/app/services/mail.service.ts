import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {

    constructor(private http: HttpClient){}

    sendMessage(body) {
        return this.http.post('http://localhost:4200/content/form', body);
    }

}