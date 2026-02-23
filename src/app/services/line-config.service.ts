import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebhookRequestDTO } from '../models/webhook-request.dto';

@Injectable({
    providedIn: 'root'
})
export class LineConfigService {
    private baseUrl = '/line-config';

    constructor(private http: HttpClient) { }

    setWebhook(payload: WebhookRequestDTO): Observable<any> {
        return this.http.post(`${this.baseUrl}/set-webhook`, payload);
    }
}
