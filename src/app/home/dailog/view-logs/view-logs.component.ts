import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs';
import { PPTableConfig, TableState } from 'src/app/probeplus/_models/pp-column.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.component.html',
  styleUrls: ['./view-logs.component.scss']
})
export class ViewLogsComponent implements OnInit {
  constructor(private dailogRef: MatDialogRef<ViewLogsComponent>,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  stackName: string = '';
  columns = [
    {
      id: 'newEventId',
      label: 'Event ID',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'LogicalResourceId',
      label: 'Logical Resource ID',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'ResourceStatus',
      label: 'Resource Status',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'Timestamp',
      label: 'Time Stamp',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    // {
    //   id: 'name',
    //   label: 'Heading 5',
    //   headerClass: ['text-start'],
    //   sortable: false,
    //   cellClass: [],
    // },
    {
      id: 'action-button',
      label: '',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
  ]
  config: PPTableConfig = {
    id: 'service-request.table',
    rowSelectEnabled: false,
    page: {
      pageSize: 10,
      pageIndex: 0,
      length: 10,
    },
    paginator: {
      hide: true,
      offline: false,
    },
    sort: {
      active: 'name',
      direction: 'asc',
    },
    translateKey: 'super-admin-table',
    translate: false,
    tableState: TableState.DEFAULT,
  };
  ngOnInit(): void {
    console.log(this.data);
    this.stackName = this.data.StackName;
    this.config.tableState = TableState.LOADING
    this.apiService.getStackEvents(this.stackName).subscribe((res) => {
      console.log(res);
      this.config.tableState = TableState.SUCCESS

      this.tableData = res.data.map((item: any) => {
        return {
          ...item,
          Timestamp: this.convertToFormattedDate(item.Timestamp),
          EventId: item.EventId,
          newEventId: item.EventId.substring(0, 21) + ".....",
        }
      })
    }, (error) => {
      this.config.tableState = TableState.FAILURE
    })

    // this.apiService.getStackEvents(this.stackName).pipe(
    //   map((item:any)=>{
    //     console.log(item);
        
    //   })
    // )
  }
  convertToFormattedDate(date: string) {
    const newDate = new Date(date).toLocaleString('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    return newDate
  }
  tableData = []
  
  submit() {
    this.dailogRef.close()
  }
}
