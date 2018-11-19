import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {

    constructor(private http: HttpClient){}

    sendMessage(body) {
        return this.http.post('http://localhost:8080/content/form', body);
    }

}