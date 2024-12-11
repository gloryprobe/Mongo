import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { PPTableConfig } from '../../_models/pp-column.model';
import { MatTableDataSource } from '@angular/material/table';
import { PpWidgetNameDirective } from '../../_directives/pp-widget-name.directive';
import { PageEvent } from '../pp-paginator/pp-paginator.component';

export interface Column {
  label: string;
  id: string;
}

@Component({
  selector: 'pp-table',
  templateUrl: './pp-table.component.html',
  styleUrls: ['./pp-table.component.scss'],
})
export class PpTableComponent {
  dataSource = new MatTableDataSource<any>([]);
  @Input() config: any; // PPTableConfig
  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Input() tableHeight: string = ''; // Table height in px
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ContentChildren(PpWidgetNameDirective)
  widgets!: QueryList<PpWidgetNameDirective>;
  widgetTemplates: any = {};

  getDisplayedColumns() {
    return this.columns?.map((column) => column.id);
  }

  getDataLength() {
    const length = this.data?.length;
    return length;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']?.currentValue) {
      if (this.config?.paginator?.offline) {
        this.data = changes['data']?.currentValue;
      } else {
        this.dataSource.data = changes['data']?.currentValue || [];
      }
    }
  }

  onPage(event: PageEvent) {
    this.config = {
      ...this.config,
      page: {
        ...this.config.page,
        pageSize: event.pageSize,
        pageIndex: event.pageIndex,
      },
    };
    if (this.config?.paginator?.offline) {
      this.sliceData(event);
    } else {
      this.page.emit(event);
    }
  }

  sliceData(event: PageEvent) {
    const data = this.data;
    const startIndex = event.pageIndex * event.pageSize;
    this.dataSource.data = data?.slice(
      startIndex,
      startIndex + this.config?.page?.pageSize > event?.length
        ? this.config?.page?.length
        : startIndex + this.config?.page?.pageSize
    );
  }

  ngAfterContentInit() {
    this.widgets.forEach((widget) => {
      this.widgetTemplates[widget.getName()] = widget.template;
    });
  }

  getTableContainerStyle() {
    return {
      height: this.tableHeight ? `${this.tableHeight}px` : '620px',
      overflow: 'auto',
      marginBottom: '1rem',
    };
  }
}
