import { NgModule } from "@angular/core";

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

const MATERIAL = [
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
];

@NgModule ({
    imports: MATERIAL,
    exports: MATERIAL
})

export class MaterialModule { }
