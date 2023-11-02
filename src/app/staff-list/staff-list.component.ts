import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { Authservice } from '../authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit{

  staff : Staff[] | undefined;
  
   constructor(private authService:Authservice,private router:Router){};

  ngOnInit(): void {
    this.getAllStaffMember();
  }


  getAllStaffMember()
  {
    this.authService.getAllStaffMember().subscribe(
      data=>
      {
        this.staff = data;
      }
    )
  }

  updateStaff(staffId : String)
  {

    this.router.navigate(['updateStaffMember',staffId]);

  }

  viewStaff(accountNumber : any)
  {

    this.router.navigate(['viewCustomer',accountNumber])
  }

  deleteStaff(accountNumber : any)
  {

    this.authService.deleteCustomer(accountNumber).subscribe(
      data=>
      {
        alert("Account has been deleted");
        this.router.navigate(['customerList']);
      }
    )
  }
}
