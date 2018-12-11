import {NgModule} from '@angular/core';
import {
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule,
    MatTooltipModule, MatProgressBarModule, MatSlideToggleModule, MatDialogModule, MatMenuModule, MatSliderModule,
    MatTabsModule, MatCheckboxModule, MatRadioModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule, MatTableModule,
    MatSortModule, MatPaginatorModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
    exports: [

        // Material Modules
        MatTooltipModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSliderModule,
        MatTabsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        CdkTableModule,
        MatSortModule,
        MatPaginatorModule
    ]
})
export class MaterialModule {
}
