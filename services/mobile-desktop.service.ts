import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { startWith, map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MobileDesktopService {
  breakpoint = 1024;

  private isMobile = () => {
    return window.innerWidth <= this.breakpoint;
  };

  private isDesktop = () => !this.isMobile();

  private events$ = fromEvent(window, 'resize');

  isMobile$ = this.events$.pipe(
    startWith(this.isMobile()),
    map(this.isMobile),
    distinctUntilChanged()
  );

  isDesktop$ = this.events$.pipe(
    startWith(this.isDesktop()),
    map(this.isDesktop),
    distinctUntilChanged()
  );
}
