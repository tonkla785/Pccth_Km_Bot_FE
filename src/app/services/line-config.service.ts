import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SetWebhookRequest {
    channelAccessToken: string;
    webhookUrl: string;
}

export interface SetWebhookResponse {
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class LineConfigService {

    private readonly apiUrl = '/line-config';

    constructor(private http: HttpClient) { }

    setWebhook(payload: SetWebhookRequest): Observable<SetWebhookResponse> {
        return this.http.post<SetWebhookResponse>(`${this.apiUrl}/set-webhook`, payload);
    }
}
