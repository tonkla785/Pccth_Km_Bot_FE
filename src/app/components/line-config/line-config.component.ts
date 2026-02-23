import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LineConfigService } from '../../services/line-config.service';
import { WebhookRequestDTO } from '../../models/webhook-request.dto';

@Component({
  selector: 'app-line-config',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './line-config.component.html',
  styleUrl: './line-config.component.css'
})
export class LineConfigComponent {
  form: WebhookRequestDTO = {
    channelAccessToken: '',
    webhookUrl: ''
  };

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private lineConfigService: LineConfigService) { }

  onSubmit(): void {
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.lineConfigService.setWebhook(this.form).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'ตั้งค่า Webhook สำเร็จ!';
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'เกิดข้อผิดพลาด กรุณาลองใหม่';
      }
    });
  }

  onReset(): void {
    this.form = { channelAccessToken: '', webhookUrl: '' };
    this.successMessage = '';
    this.errorMessage = '';
  }
}
