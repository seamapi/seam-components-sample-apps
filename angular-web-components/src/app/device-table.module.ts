import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter, ViewChild } from "@angular/core";

@Component({
  selector: "device-table",
  template:
    '<seam-device-table #child [publishableKey]="publishableKey"></seam-device-table>',
})
export class DeviceTable {
  @Input() publishableKey?: string;
  @Output() deviceClick = new EventEmitter<string>();

  handleDeviceClick(deviceId: string) {
    this.deviceClick.emit(deviceId);
  }

  @ViewChild("child") child?: {
    nativeElement: {
      onDeviceClick: (deviceId: string) => void;
    };
  };

  ngAfterViewInit() {
    if (this.child == null) return;
    this.child.nativeElement.onDeviceClick = this.handleDeviceClick.bind(this);
  }
}

@NgModule({
  declarations: [DeviceTable],
  exports: [DeviceTable],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeviceTableModule {}
