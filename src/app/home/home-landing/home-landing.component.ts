import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PPTableConfig, TableState } from 'src/app/probeplus/_models/pp-column.model';
import { LaunchInstanceComponent } from '../dailog/launch-instance/launch-instance.component';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent implements OnInit{
  constructor(private dailog: MatDialog,
    private apiService: ApiService
  ) { }
  ngOnInit(): void {
    this.apiService.getInstances().subscribe((res)=>{
      console.log(res);
      this.tableData = res.data
    })

  }

  refreshData(){
    this.tableData = [];
    this.apiService.getInstances().subscribe((res)=>{
      console.log(res);
      this.tableData = res.data
    })
  }
//   {
//     "instance_id": "i-04912f213a7a436f0",
//     "private_ip": "N/A",
//     "public_ip": "N/A",
//     "state": "terminated",
//     "name": "MongoDB-Instance"
// },
  columns = [
    {
      id: 'instance_id',
      label: 'Instance ID',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'private_ip',
      label: 'Private IP',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'public_ip',
      label: 'Public IP',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'state',
      label: 'State',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'name',
      label: 'Name',
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
  tableData = [
    
  ]
  openDailog() {
    this.dailog.open(LaunchInstanceComponent, { width: '800px', maxHeight: '500px' })
  }
}
