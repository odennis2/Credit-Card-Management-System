import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  @Input() title: string = '';
  @Input() message: string = '';
}
