import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AccountComponent } from './Account/Account.component';
import { AccountSettingComponent } from './AccountSetting/AccountSetting.component';
import { CollaborationComponent } from './Collaboration/Collaboration.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { ProfileComponent } from './Profile/Profile.component';
import { AdminAccountRoutes } from './AdminAccount.routing';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './Camera/camera.component';
import { AdditionalInfoComponent } from './EditProfile/AdditionalInfo/AdditionalInfo.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
	declarations: [
		ProfileComponent,
		AccountComponent,
		AccountSettingComponent,
		CollaborationComponent,
		EditProfileComponent,
		CameraComponent,
		AdditionalInfoComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(AdminAccountRoutes),
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatRadioModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		FlexLayoutModule,
		MatCheckboxModule,
		WebcamModule,
		MatDialogModule,
	],
	exports: [AdditionalInfoComponent],
	providers: [CameraComponent]
})
export class AdminAccountModule { }
