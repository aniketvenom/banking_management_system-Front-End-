import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Authservice } from '../authservice';
import { RecycleBin } from '../recycle-bin';

@Component({
  selector: 'app-recycle-bin',
  templateUrl: './recycle-bin.component.html',
  styleUrls: ['./recycle-bin.component.css']
})
export class RecycleBinComponent implements OnInit{

  recycleBin !: RecycleBin[];

  constructor(private authService:Authservice){};

  ngOnInit(): void {
    this.getAllAccounts();
  }
  getAllAccounts() {
    this.authService.getAllDeletedAccounts().subscribe(
      data=>
      {
        this.recycleBin=data;
      }
    )
  }
;


}
