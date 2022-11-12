import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { EncargadoMainComponent } from "./encargado-main/encargado-main.component";

@NgModule({
  declarations: [
    EncargadoMainComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
MatTableModule
  ],
  exports: [
    EncargadoMainComponent
  ]
})
export class EncargadoModule {}
