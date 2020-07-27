import { Directive, TemplateRef, ViewContainerRef, Input, OnDestroy } from '@angular/core';
import { MobileDesktopService } from '../services/mobile-desktop.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[mobileOnly]'
})
export class MobileOnlyDirective implements OnDestroy {
  private hasView = false;
  private subscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private mobile: MobileDesktopService
  ) {
    this.subscription = this.mobile.isMobile$.subscribe(isMobile => {
      if (isMobile && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else {
        this.viewContainer.clear();
        this.hasView = false;
      }
    });
  }


  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
