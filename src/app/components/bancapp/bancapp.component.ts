import { AfterViewInit, Component, ViewChild, OnInit, Pipe } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../models/user.model';
import { environment } from '../../../environment/environment';
import { ApplicationUrls } from '../../enum/application-urls';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bancapp',
  templateUrl: './bancapp.component.html',
  styleUrl: './bancapp.component.css'
})
export class BancappComponent {

  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  users: User[] = [];
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private commonService: UserService, private dialog: MatDialog) {}

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.commonService.getRequest(environment.baseUrl + ApplicationUrls.Users).subscribe((response) => {
      if (response) {
        this.dataSource.data = response;
      }
    });
  }
  
}
