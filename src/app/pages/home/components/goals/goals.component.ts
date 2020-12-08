import { Component, Input, OnInit } from "@angular/core";
import { Goals } from "src/app/types/Goal";

@Component({
  selector: "app-goals",
  templateUrl: "./goals.component.html",
  styleUrls: ["./goals.component.scss"],
})
export class GoalsComponent implements OnInit {
  @Input() goals: Goals;
  constructor() {}

  ngOnInit() {
    console.log("goals", this.goals);
  }
  ionViewDidEnter() {
    console.log("did enter", this.goals);
  }
}
