import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Angular Component Library`;
  buttonTitle = `Button Component`;
  buttonLoading = false;

  constructor(private ref: ChangeDetectorRef) {}

  buttonClicked(event: any): void {
    this.buttonLoading = true;
    this.buttonTitle = `Component loading`;
    setTimeout(() => {
      this.buttonLoading = false;
      this.buttonTitle = `Button Component`;
      alert(event);
    }, 3000);
  }

  // or if you are using ngFor because you have a series of bubttons as options
  // import and declare in constructor private ref: ChangeDetectorRef
  optionsSelectHandler(optionsList: any[], selection: any): void {
    optionsList.forEach(option => {
      option.selected = option === selection ? true : false;
      this.ref.markForCheck();
    });
    this.ref.detectChanges();
  }
}
