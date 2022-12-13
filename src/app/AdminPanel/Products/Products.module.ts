import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { EditProductComponent } from './EditProduct/EditProduct.component';
import { AddProductComponent } from './AddProduct/AddProduct.component';
import { GlobalModule} from '../../Global/Global.module';
import { ProductsComponent } from './Products/Products.component';
import { ProductsRoutes} from './Products.routing';

@NgModule({
   declarations: [ProductsComponent, EditProductComponent, AddProductComponent],
   imports: [
      CommonModule,
      FlexLayoutModule,
      MatSidenavModule,
      MatIconModule,	      
		MatCheckboxModule,
      MatButtonModule,
      MatSelectModule,
      MatCardModule,
      MatMenuModule,
      MatOptionModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatDividerModule,
      MatListModule, 
      RouterModule.forChild(ProductsRoutes),
      TranslateModule,
      MatPaginatorModule,
      MatSortModule,
      MatGridListModule,
      GlobalModule,
      FormsModule,
      ReactiveFormsModule
   ]
})
export class ProductsModule { }
