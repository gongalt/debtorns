import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from "@angular/fire/database";
import { Goal } from "src/app/types/Goal";

@Injectable({
  providedIn: "root",
})
export class GoalService {
  goalListRef: AngularFireList<any>;
  goalRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  // Create
  createGoal({ title, description }: Goal) {
    return this.goalListRef.push({
      title,
      description,
    });
  }

  // Get Single
  getGoal(id: string) {
    this.goalRef = this.db.object("/goals/" + id);
    return this.goalRef;
  }

  // Get List
  getGoalList() {
    this.goalListRef = this.db.list("/goals");
    return this.goalListRef;
  }

  // Update
  updateGoal(id, { title, description }: Goal) {
    return this.goalRef.update({
      title,
      description,
    });
  }

  // Delete
  deleteGoal(id: string) {
    this.goalRef = this.db.object("/goals/" + id);
    this.goalRef.remove();
  }
}
