import { Routes } from '@angular/router';
import { ProfileComponent } from './Profile/Profile.component';
import { AccountComponent } from './Account/Account.component';
import { AccountSettingComponent } from './AccountSetting/AccountSetting.component';
import { CollaborationComponent } from './Collaboration/Collaboration.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';

export const AdminAccountRoutes: Routes = [
	{
		path      : '',
		component : AccountComponent,
		children: [ 
         {
            path: 'profile',
            component: ProfileComponent
         },
         { 
            path: 'settings', 
            component: AccountSettingComponent 
         },
         { 
            path: 'collaboration', 
            component: CollaborationComponent 
         },
         {
            path: 'profile/edit',
            component: EditProfileComponent
         },
      ]
	}
];
