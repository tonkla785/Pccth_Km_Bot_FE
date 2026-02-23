import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LineConfigService } from '../../services/line-config.service';

@Component({
  selector: 'app-line-config',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './line-config.component.html',
  styleUrl: './line-config.component.css'
})
export class LineConfigComponent {
  configForm: FormGroup;
  isLoading = false;
  resultMessage = '';
  resultType: 'success' | 'error' | '' = '';

  constructor(
    private fb: FormBuilder,
    private lineConfigService: LineConfigService
  ) {
    this.configForm = this.fb.group({
      channelAccessToken: ['', [Validators.required]],
      webhookUrl: ['', [Validators.required, Validators.pattern(/^https:\/\/.+/)]]
    });
  }

  onSubmit(): void {
    if (this.configForm.invalid) {
      this.configForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.resultMessage = '';
    this.resultType = '';

    const { channelAccessToken, webhookUrl } = this.configForm.value;

    this.lineConfigService.setWebhook({ channelAccessToken, webhookUrl }).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.resultType = 'success';
        this.resultMessage = res.message || 'Webhook ถูกตั้งค่าเรียบร้อยแล้ว!';
      },
      error: (err) => {
        this.isLoading = false;
        this.resultType = 'error';
        this.resultMessage = err.error?.message || err.message || 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง';
      }
    });
  }
}
