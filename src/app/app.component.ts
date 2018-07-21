import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Angular Component Library`;
  buttonTitle = `Button Component`;
  buttonLoading = false;

  buttonClicked(event: any): void {
    this.buttonLoading = true;
    this.buttonTitle = `Component loading`;
    setTimeout(() => {
      this.buttonLoading = false;
      this.buttonTitle = `Button Component`;
      alert(event);
    }, 3000);
  }
}
