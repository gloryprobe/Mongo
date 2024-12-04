import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PpTableComponent } from './_components/pp-table/pp-table.component';
import { PpPaginatorComponent } from './_components/pp-paginator/pp-paginator.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { PpWidgetComponent } from './_components/pp-widget/pp-widget.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PpWidgetNameDirective } from './_directives/pp-widget-name.directive';
import { I18nModule } from '../i18n/i18n.module';
import { PpHeaderComponent } from './_components/pp-header/pp-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    PpTableComponent,
    PpWidgetComponent,
    PpWidgetNameDirective,
    PpPaginatorComponent,
    PpHeaderComponent,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatTableModule,
    I18nModule,
    MatSortModule,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    PpTableComponent,
    PpWidgetComponent,
    PpWidgetNameDirective,
    PpPaginatorComponent,
    PpHeaderComponent,
  ]
})
export class ProbeplusModule { }
