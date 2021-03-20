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

  tap: Tap;
  name: string;

  public constructor(private service: TapService,
    private readonly themeService: NbThemeService) {
    this.materialTheme$ = this.themeService.onThemeChange()
      .pipe(map(theme => {
        const themeName: string = theme?.name || '';
        return themeName.startsWith('material');
      }));
  }

  create() {
		//this.spinner.show();

    // let tap: any ={
    //   name: "Pelo site",
    //   TargetUrl: "teste",
    //   BeveragePriceCode: "bvp_6KlB0PnU3fBDe5P9"
    // };

    let teste : any;
    
    console.log(this.tap)
  

		this.service.CreateTap(this.tap).subscribe( result => {teste = result});
	}


  public readonly materialTheme$: Observable<boolean>;


}
