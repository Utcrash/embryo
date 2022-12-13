import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './Reports/Reports.component';
import { ReportsRoutes} from './Reports.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { WidgetModule } from '../Widget/Widget.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [ReportsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(ReportsRoutes),
		TranslateModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatTableModule,
		MatMenuModule,
		MatDividerModule,
		WidgetModule,
		MatTabsModule,
      MatChipsModule,
      FlexLayoutModule
	]
})
export class ReportsModule { }
