import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-reset-component',
    template: `
    <ion-row>
        <ion-col col-4>
            <button ion-button small color="danger" (click)="onResetAll()">Reset All</button>
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
    @Output() change: EventEmitter<number> = new EventEmitter();
    @Output() taps: EventEmitter<number> = new EventEmitter();
    @Output() presses: EventEmitter<number> = new EventEmitter();

    onResetAll() {
        this.change.emit(0);
    }

    onResetTaps() {
        this.taps.emit(0);
        console.log('I should reset taps to 0');
    }

    onResetPresses() {
        this.taps.emit(0);
        console.log('I should reset presses to 0');
    }
}