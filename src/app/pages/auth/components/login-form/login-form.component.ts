import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";
import { ToastService } from "src/app/services/toast/toast.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToastService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  ngOnInit() {}

  async login() {
    await this.toast.showLoader();
    if (this.loginForm.valid) {
      console.log("login valid");
      const payload = this.loginForm.value;
      this.authService
        .login(payload)
        .then(() => {
          this.toast.loading.dismiss();
          setTimeout(() => {
            this.router.navigateByUrl("/tabs/home");
          }, 200);
        })
        .catch((err) => {
          this.toast.loading.dismiss();
          this.toast.showAlert(null, err.message);
        });
    } else {
      this.toast.loading.dismiss();
      this.toast.showBottomShort("Error Form submit");
    }
  }
}
