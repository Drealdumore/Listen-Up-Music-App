// import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";

// @Component({
//   moduleId: module.id,
//   selector: 'audio-player',
//   template: `
//     <audio #audioElement src="{{ src }}">
//       <p>
//         Your browser does not support HTML5 audio. Here is a
//         <a href="{{ src }}">link</a> instead.
//       </p>
//     </audio>
//     <span (click)="paused ? play() : pause()" class="icon-align-middle">
//       <mat-icon *ngIf="paused" class="icon-size-30"
//         >play_circle_outline</mat-icon
//       >
//       <mat-icon *ngIf="!paused" class="icon-size-30"
//         >pause_circle_outline</mat-icon
//       >
//     </span>
//   `,
// })
// export class AudioPlayerComponent implements AfterViewInit {
//   @Input() public src: string;
//   @Input() public autoplay: boolean = false;
//   @Input() public showStateLabel: boolean = false;
//   public audioStateLabel = 'Audio sample';
//   @Input() public volume: number = 1.0; /* 1.0 is loudest */

//   @ViewChild('audioElement', { static: false }) public _audioRef: ElementRef;
//   private audio: HTMLMediaElement;

//   public constructor() {}

//   public pause(): void {
//     if (this.audio) {
//       this.audio.pause();
//       this.audioStateLabel = 'Paused';
//     }
//   }

//   public get paused(): boolean {
//     if (this.audio) {
//       return this.audio.paused;
//     } else {
//       return true;
//     }
//   }

//   public play(): void {
//     if (this.audio) {
//       if (this.audio.readyState >= 2) {
//         this.audio.play();
//         this.audioStateLabel = 'Playing...';
//       }
//     }
//   }

//   public ngAfterViewInit() {
//     this.audio = this._audioRef.nativeElement;
//     if (this.audio) {
//       this.audio.volume = this.volume;
//       this.audio.autoplay = this.autoplay;
//     }
//   }
// }
