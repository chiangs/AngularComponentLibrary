import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button type="buttonType" class="button" (click)="onClick()" 
    [disabled]="isDisabled"
    [ngClass]="{'loading' : loading, 'disabled': isDisabled, 'active': isActivated}">{{ buttonText }}
  </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonSubmit = false;
  @Input()
  set loading(loading: boolean) {
    this._loading = loading || false;
  }
  get loading(): boolean {
    return this._loading;
  }
  @Input()
  set isDisabled(isDisabled: boolean) {
    this._isDisabled = isDisabled || false;
  }
  get isDisabled(): boolean {
    return this._isDisabled;
  }
  @Input()
  set isActivated(isActivated: boolean) {
    this._isActivated = isActivated || false;
  }
  get isActivated(): boolean {
    return this._isActivated;
  }
  @Output() buttonClick: EventEmitter<any>;
  active = false;
  buttonType: string;
  private _loading: boolean;
  private _isDisabled: boolean;
  private _isActivated: boolean;

  constructor() {
    this.buttonClick = new EventEmitter<any>();
    this.buttonType = this.buttonSubmit ? `submit` : `button`;
  }

  ngOnInit() {
    this.buttonText = this.buttonText ? this.buttonText : `No buttonText`;
  }

  onClick(): any {
    if (this.isDisabled) {
      return;
    } else {
      this.buttonClick.emit(this.buttonText + ` clicked`);
    }
  }
}
