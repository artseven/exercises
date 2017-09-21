import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-reset-component',
    template: `
    <ion-row>
        <ion-col col-4>
            <button ion-button small block color="danger" (click)="onReset('all')">Reset All</button>
        </ion-col>
        <ion-col col-4>
            <button ion-button small block color="danger" (click)="onReset('taps')">Reset "Taps"</button>
        </ion-col>
        <ion-col col-4>
            <button ion-button small block color="danger" (click)="onReset('presses')">Reset "Presses"</button>
        </ion-col>
    </ion-row>
    `
})
export class ResetComponent {
    @Output() didReset = new EventEmitter<string>();

    onReset(type: string) {
        this.didReset.emit(type);
    }

}