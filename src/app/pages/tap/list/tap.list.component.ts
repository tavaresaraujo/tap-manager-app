import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbThemeService } from '@nebular/theme';

import { TapService } from '../../../../services/tap.service';

import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-tap-list',
  templateUrl: './tap.list.component.html',
  styleUrls: ['./tap.list.component.scss'],
})

export class TapListComponent  {

  settings = {
    actions: false,
    columns: {
      code: {
        filter: false,
        title: 'Code',
        type: 'string',
      },
      name: {
        filter: false,
        title: 'Name',
        type: 'string',
      },
      targetUrl: {
        filter: false,
        title: 'Target Url',
        type: 'string',
      },
      createdAt: {
        filter: false,
        title: 'Created',
        type: 'date',
      },
      updatedAt: {
        filter: false,
        title: 'Updated',
        type: 'date',
      },
      active: {
        filter: false,
        title: 'Active',
        type: 'number',
      },
    },
  };

  public readonly materialTheme$: Observable<boolean>;
  
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: TapService,
    private readonly themeService: NbThemeService,
    private router: Router) {
      this.service.GetTaps().subscribe(data => { this.source.load(data);
    });

    this.materialTheme$ = this.themeService.onThemeChange()
      .pipe(map(theme => {
        const themeName: string = theme?.name || '';
        return themeName.startsWith('material');
      }));
  }

  create(){
    this.router.navigate(['/pages/tap/create'])
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
