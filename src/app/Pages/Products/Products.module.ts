import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';
import { FormsModule}    from '@angular/forms';

import { ProductsRoutes } from './Products.routing';
import { ProductsListComponent } from './ProductsList/ProductsList.component';
import { DetailPageComponent } from './DetailPage/DetailPage.component';
import { GlobalModule } from '../../Global/Global.module';
import { TemplatesModule } from '../../Templates/Templates.module';

import { FlexLayoutModule } from '@angular/flex-layout';
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

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ProductsRoutes),
		FlexLayoutModule,
		MatCardModule, 
		MatButtonModule,
		MatMenuModule, 
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
		GlobalModule,
		TemplatesModule,
		NgAisModule,
		FormsModule
	],
	declarations: [
		ProductsListComponent, 
		DetailPageComponent
	]
})
export class ProductsModule { }
