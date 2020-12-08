import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FabsComponent } from "./fabs/fabs.component";

@NgModule({
  declarations: [FabsComponent],
  imports: [CommonModule],
  exports: [FabsComponent],
})
export class ComponentsModule {}
