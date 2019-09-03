import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { StockServiceService, Stock } from "./searchstock.service";

@Component({
  selector: 'app-searchstock',
  templateUrl: './searchstock.component.html',
  styleUrls: ['./searchstock.component.scss']
})
export class SearchstockComponent implements OnInit {

  stockItems: Stock[] = [];
  displayedColumns: any
  dataSource: any 
  constructor(private StockList: StockServiceService) {}

  ngOnInit() {
    this.StockList.getDisplayStocks().subscribe(response => {
      this.stockItems = response;
      console.log(response);
      this.displayedColumns = ["id", "name", "age"];
      this.dataSource = new MatTableDataSource(this.stockItems);
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
