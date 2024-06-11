import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  standalone: true,
  imports: [],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
  providers: [LoggingService],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  // to use a service, we have to inject it into the component
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {
    this.accountService.statusUpdated.subscribe(
      (
        status: string // cross-component communication
      ) => alert('new status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    // // console.log('A server status changed, new status: ' + accountStatus);
  }
}
