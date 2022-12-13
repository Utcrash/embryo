import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { MainAdminPanelComponent } from './Main/Main.component';
import { MenuToggleModule } from './Core/Menu/MenuToggle.module';
import { AdminMenuItems } from './Core/Menu/MenuItems/MenuItems';
import { SideBarComponent } from './Shared/SideBar/SideBar.component';
import { MenuListItemsComponent } from './Shared/MenuListItems/MenuListItems.component';
import { AdminHeaderComponent } from './Shared/Header/Header.component';
import { WidgetModule } from './Widget/Widget.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastaModule} from 'ngx-toasta';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AdminPanelRoutes } from './admin-panel-routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GlobalModule } from '../Global/Global.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [	
		MainAdminPanelComponent,
		SideBarComponent,
		MenuListItemsComponent,
		AdminHeaderComponent
	],
	imports: [
		CommonModule,
		MenuToggleModule,
		WidgetModule,
		MatButtonModule, 
		MatCardModule, 
      MatMenuModule, 
      FlexLayoutModule,
		MatToolbarModule, 
		MatIconModule, 
		MatInputModule, 
		MatDatepickerModule, 
		MatNativeDateModule, 
		MatProgressSpinnerModule,
		MatTableModule, 
		MatExpansionModule, 
		MatSelectModule,
		MatSnackBarModule, 
		MatTooltipModule, 
		MatChipsModule, 
		MatListModule, 
		MatSidenavModule, 
		MatTabsModule, 
		MatProgressBarModule,
		MatCheckboxModule,
		MatSliderModule,
		MatRadioModule,
		MatDialogModule,
		MatGridListModule,
		PerfectScrollbarModule,
		RouterModule.forChild(AdminPanelRoutes),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		}),
		HttpClientModule,
		GlobalModule,
		ToastaModule.forRoot()
	],
	providers : [
		AdminMenuItems
	],
	exports : [
		RouterModule,
		ToastaModule
	]

})

export class AdminPanelModule { }
