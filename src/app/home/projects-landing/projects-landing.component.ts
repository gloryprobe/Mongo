import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PPTableConfig, TableState } from 'src/app/probeplus/_models/pp-column.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-projects-landing',
  templateUrl: './projects-landing.component.html',
  styleUrls: ['./projects-landing.component.scss']
})
export class ProjectsLandingComponent implements OnInit {
  constructor(private dailog: MatDialog,
    private apiService: ApiService
  ) { }
  ngOnInit(): void {
    this.apiService.getAllProjects().subscribe((res)=>{
      console.log(res);
      
    })
  }

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
  tableData = []

}
