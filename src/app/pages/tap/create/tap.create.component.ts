import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Observable, throwError  } from 'rxjs';
import { map } from 'rxjs/operators';

import { TapService } from '../../../../services/tap.service';

@Component({
  selector: 'ngx-tap-create',
  templateUrl: './tap.create.component.html',
  styleUrls: ['./tap.create.component.scss'],
})

export class TapCreateComponent  {

  public readonly materialTheme$: Observable<boolean>;

  tap: Tap;
  bevarage: Bevarage[];
  bevaragePrice: BevaragePrice[];

  
  public constructor(private service: TapService,
    private readonly themeService: NbThemeService) {

      this.materialTheme$ = this.themeService.onThemeChange()
        .pipe(map(theme => {
          const themeName: string = theme?.name || '';
          return themeName.startsWith('material');
        }));

      this.service.GetBeverages().subscribe(data => { this.bevarage = data});
  }

  create() {
		//this.spinner.show();
    let response : any;
		this.service.CreateTap(this.tap).subscribe( result => {response = result});
	}

  loadBevaragePrice(event) {
    this.service.GetBeverages().subscribe(data => { this.bevaragePrice = data});
  }
}