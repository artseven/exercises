import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-reset-component',
    template: `
    <ion-row>
        <ion-col col-4>
            <button ion-button small color="danger" (click)="onResetAll($event)">Reset All</button>
        </ion-col>
        <ion-col col-4>
            <button ion-button small color="danger" (click)="onResetTaps()">Reset "Taps"</button>
        </ion-col>
        <ion-col col-4>
            <button ion-button small color="danger" (click)="onResetPresses()">Reset "Presses"</button>
        </ion-col>
    </ion-row>
    `
})
export class ResetComponent {
    @Output() all: EventEmitter<any> = new EventEmitter();

    onResetAll() {
        this.all.emit(null);
        console.log('I should reset taps and presses to 0');
    }

    onResetTaps() {
        console.log('I should reset taps to 0');
    }

    onResetPresses() {
        console.log('I should reset presses to 0');
    }
}