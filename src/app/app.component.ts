import { Component, VERSION } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faBug } from '@fortawesome/free-solid-svg-icons';

const icons = [faBug];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(
    private readonly domSanitizer: DomSanitizer,
    private readonly iconRegistry: MatIconRegistry,
    private readonly iconLibrary: FaIconLibrary
  ) {
    icons.forEach((ic) => {
      this.iconLibrary.addIcons(ic);
      this.iconRegistry.addSvgIconLiteralInNamespace(
        ic.prefix,
        ic.iconName,
        this.domSanitizer.bypassSecurityTrustHtml(icon(ic).html as any),
      );
    });
  }
}
