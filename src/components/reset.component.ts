import { Component, Output } from '@angular/core';

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
    onResetAll() {
        console.log('I should reset taps and presses to 0');
    }

    onResetTaps() {
        console.log('I should reset taps to 0');
    }

    onResetPresses() {
        console.log('I should reset presses to 0');
    }
}