import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService) { }
  user={localId:"UserID",names:"Name"};
  ngOnInit(): void {
    this.auth.conAccess();
    if (this.auth.isAuthenticated()) {
      this.auth.detail().subscribe({
        next:data=>{
        this.user.localId = data.users[0].localId;
        this.user.names = data.users[0].names;

      
        }
      })
      
    }
  }

}
