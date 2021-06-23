
import { NgModule } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  exports: [
    NzButtonModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzFormModule,
    NzI18nModule,
    NzIconModule,
    NzImageModule,
    NzInputModule,
    NzLayoutModule,
    NzListModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzSelectModule,
    NzTreeModule,
    NzTreeViewModule,
    NzTreeSelectModule,
    NzTypographyModule
  ]
})
export class NgZorroAntdModule {

}
