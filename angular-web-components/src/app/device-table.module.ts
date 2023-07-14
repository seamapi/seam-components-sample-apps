import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "device-table",
  template:
    '<seam-device-table [publishableKey]="publishableKey"></seam-device-table>',
})
export class DeviceTable {
  @Input() publishableKey?: string;
}

@NgModule({
  declarations: [DeviceTable],
  exports: [DeviceTable],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeviceTableModule {}
