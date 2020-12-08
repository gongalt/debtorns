import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";
import { GoalService } from "src/app/services/goal/goal.service";
import { Goals } from "src/app/types/Goal";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  goals: Goals = [
    {
      title: "",
      description: "",
    },
  ];
  constructor(private goalService: GoalService, private auth: AuthService) {}

  ngOnInit() {
    this.getGoals();
  }

  getGoals() {
    this.goalService
      .getGoalList()
      .valueChanges()
      .subscribe(
        (res) => {
          console.log("res", res);
        },
        (err) => {
          console.log("err", err);
        }
      );
  }
}
