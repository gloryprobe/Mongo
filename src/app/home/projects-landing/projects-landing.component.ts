import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PPTableConfig, TableState } from 'src/app/probeplus/_models/pp-column.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { CreateProjectComponent } from '../dailog/create-project/create-project.component';

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
    this.apiService.getAllProjects().subscribe((res) => {
      console.log(res);

    })
  }

  columns = [
    {
      id: 'project_id',
      label: 'Project ID',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'project_name',
      label: 'Project Name',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'domains',
      label: 'Domains',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'regions',
      label: 'Regions',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'micro_services',
      label: 'Micro Services',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'created_by',
      label: 'Created By',
      headerClass: ['text-start'],
      sortable: false,
      cellClass: [],
    },
    {
      id: 'created_at',
      label: 'Created Time',
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
    {

    },

  ]

  openCreateProject() {
    this.dailog.open(CreateProjectComponent, { width: '800px', maxHeight: '800px' })
  }
}
