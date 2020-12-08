import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { Account } from "src/app/types/Account";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup({ email, password }: Account) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  login({ email, password }: Account) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  reset(email: string) {
    return this.firebaseAuth.sendPasswordResetEmail(email);
  }

  logout() {
    this.firebaseAuth.signOut();
  }
}
