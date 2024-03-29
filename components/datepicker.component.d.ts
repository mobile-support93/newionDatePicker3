import { NavParams, ViewController } from 'ionic-angular';
import { DatePickerData, DatePickerView } from './datepicker.interface';
import { DateService } from '../services/datepicker.service';
export declare class DatePickerComponent {
    viewCtrl: ViewController;
    navParams: NavParams;
    DatepickerService: DateService;
    config: DatePickerData;
    selectedDate: Date;
    dateList: Date[];
    cols: number[];
    rows: number[];
    weekdays: string[];
    months: string[];
    years: number[];
    view: DatePickerView;
    views: typeof DatePickerView;
    private tempDate;
    private today;
    constructor(viewCtrl: ViewController, navParams: NavParams, DatepickerService: DateService);
    initialize(): void;
    createDateList(selectedDate: Date): void;
    getDate(row: number, col: number): Date;
    getDateAsDay(row: number, col: number): number;
    isDisabled(date: Date): boolean;
    testYear(year: number): boolean;
    testMonth(month: number): boolean;
    testDay(day: number): boolean;
    isMark(date: Date): boolean;
    isActualDate(date: Date): boolean;
    isSelectedDate(date: Date): boolean;
    isTempDate(date: Date): boolean;
    selectDate(date: Date): void;
    getSelectedWeekday(): string;
    getSelectedMonth(): string;
    getDayList(): string[];
    getTempMonth(): string;
    getTempYear(): number;
    getTempDate(): number;
    getSelectedDate(): number;
    getSelectedYear(): number;
    setSelectedMonth(month: number): void;
    setSelectedDay(day: number): void;
    setSelectedYear(year: number): void;
    setView(view: DatePickerView, index: number, total: number, scrolledElement: HTMLElement): void;
    onCancel(): void;
    onDone(): void;
    limitTo(arr: Array<string> | string, limit: number): Array<string> | string;
    nextMonth(): void;
    prevMonth(): void;
    private areEqualDates(dateA, dateB);
}
