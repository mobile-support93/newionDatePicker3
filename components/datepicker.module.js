import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './datepicker.component';
import { DatePickerController } from './datepicker.modal';
import { DatePickerDirective } from './datepicker.directive';
import { DateService } from './datepicker.service';
var DatePickerModule = (function () {
    function DatePickerModule() {
    }
    return DatePickerModule;
}());
export { DatePickerModule };
DatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                exports: [
                    DatePickerComponent,
                    DatePickerDirective
                ],
                entryComponents: [DatePickerComponent],
                declarations: [DatePickerComponent, DatePickerDirective],
                providers: [
                    DatePickerController,
                    DateService
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ]
            },] },
];
DatePickerModule.ctorParameters = function () { return []; };
;
//# sourceMappingURL=datepicker.module.js.map