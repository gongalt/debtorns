import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { AuthPageRoutingModule } from "./auth-routing.module";

import { AuthPage } from "./auth.page";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [CommonModule, IonicModule, AuthPageRoutingModule, SharedModule],
  declarations: [AuthPage, LoginFormComponent],
})
export class AuthPageModule {}
