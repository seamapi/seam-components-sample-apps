import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "connect-account-button",
  template:
    '<seam-connect-account-button class="connect-account-button" [publishableKey]="publishableKey"></seam-connect-account-button>',
})
export class ConnectAccountButton {
  @Input() publishableKey?: string;
}

@NgModule({
  declarations: [ConnectAccountButton],
  exports: [ConnectAccountButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConnectAccountButtonModule {}
