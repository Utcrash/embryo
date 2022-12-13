import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatBadgeModule } from '@angular/material/badge';
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
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserAccountRoutes } from './UserAccount.routing';
import { AccountComponent } from './Account/Account.component';
import { ProfileComponent } from './Profile/Profile.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { CardsComponent } from './Cards/Cards.component';
import { AddressComponent } from './Address/Address.component';
import { OrderHistoryComponent } from './OrderHistory/OrderHistory.component';
import { GridProductComponent } from './GridProduct/GridProduct.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserAccountRoutes),
    MatBadgeModule,
    MatButtonModule, 
    FlexLayoutModule,
    MatCardModule, 
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
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
     AccountComponent, 
     ProfileComponent, 
     EditProfileComponent, 
     CardsComponent, 
     AddressComponent, 
     OrderHistoryComponent,
     GridProductComponent
   ]
})
export class UserAccountModule { }
