import { Directive, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { MobileDesktopService } from '../services/mobile-desktop.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appDesktopOnly]'
})

export class DesktopOnlyDirective  implements OnDestroy {
  private hasView = false;
  private subscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private mobile: MobileDesktopService
  ) {
    this.subscription = this.mobile.isDesktop$.subscribe(isDesktop => {
      if (isDesktop && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else {
        this.viewContainer.clear();
        this.hasView = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
