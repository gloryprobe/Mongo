import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PPTableConfig, TableState } from 'src/app/probeplus/_models/pp-column.model';
import { ViewStacksComponent } from '../dailog/view-stacks/view-stacks.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { ViewLogsComponent } from '../dailog/view-logs/view-logs.component';
import { ConfirmationPopupComponent } from '../dailog/confirmation-popup/confirmation-popup.component';
import { LaunchInstanceComponent } from '../dailog/launch-instance/launch-instance.component';

@Component({
  selector: 'app-stacks-page',
  templateUrl: './stacks-page.component.html',
  styleUrls: ['./stacks-page.component.scss']
})
export class StacksPageComponent implements OnInit {
  constructor(private dailog: MatDialog,
    private apiService: ApiService
  ) { }
  search: string = '';
  columns = [
    {
      id: 'StackName',
      label: 'Stack Name',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'newStackId',
      label: 'Stack ID',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'StackStatus',
      label: 'Stack Status',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'CreationTime',
      label: 'Creation Time',
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
  tableData = []

  openDailog(row: any) {
    let data = [
      { key: 'STACK NAME', value: row.StackName },
      { key: 'STACK ID', value: row.StackId },
      { key: 'STACK STATUS', value: row.StackStatus },
      { key: 'CREATION TIME', value: row.CreationTime },
    ]
    this.dailog.open(ViewStacksComponent, { width: '800px', maxHeight: '500px', data: data })
      .afterClosed().subscribe((res) => {
        console.log(res);

      })
  }

  openLogsDailog(row: any) {
    this.dailog.open(ViewLogsComponent, { width: '1200px', maxHeight: '800px', data: row })
  }

  openDeletePopup(row: any) {
    this.dailog.open(ConfirmationPopupComponent, { width: '600px', maxHeight: '600px', data: { row, heading: 'Delete Stack', message: 'Are you' } }).afterClosed().subscribe((res) => {
      if (res) {
        const stackName = row.StackName
        console.log(stackName);

        // this.apiService.getDeleteStack(stackName).subscribe((res) => {
        //   console.log(res);

        // })
      }
    })
  }

  openLaunchInstance() {
    this.dailog.open(LaunchInstanceComponent, { width: '800px', maxHeight: '500px' }).afterClosed().subscribe((res) => {
      if (res) {
        this.setTableData();
      }
    })
  }

  stackName: string = '';
  formattedDate: any[] = []

  ngOnInit(): void {
    this.setTableData()
    const projectId ='6759383cda7405dd104f95f4'
    this.apiService.getProjectById(projectId).subscribe((res) => {
      console.log(res);

    })
  }

  setTableData() {
    this.config.tableState = TableState.LOADING;
    this.apiService.getStacks().subscribe((res) => {
      console.log(res);
      // this.tableData = res.data
      this.tableData = res.data.map((item: any) => {
        return {
          ...item,
          CreationTime: this.convertToFormattedDate(item.CreationTime),
          StackId: item.StackId,
          newStackId: item.StackId.substring(0, 26) + "....."
        }
      })
      this.config.tableState = TableState.SUCCESS
      console.log(this.tableData);
    }, (error) => {
      this.config.tableState = TableState.FAILURE
    });
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

  getSearchTerm(event: any) {
    // console.log(event.target.value);
    this.search = event.target.value;
    console.log(this.search);

    this.apiService.getStacks(this.search).subscribe((res) => {
      console.log(res);

    });
  }
}
