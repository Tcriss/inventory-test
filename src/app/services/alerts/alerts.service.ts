import { Injectable } from '@angular/core';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private alerts:TuiAlertService ) { }

  showAlert(title:string, message:string): void {
    this.alerts
        .open(message, {
          label: title,
          status: TuiNotification.Success
        })
        .subscribe();
  }
}
