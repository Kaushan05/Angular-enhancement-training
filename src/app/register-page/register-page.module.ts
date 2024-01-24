import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './register-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [CommonModule, RegisterPageRoutingModule, SharedModuleModule],
})
export class RegisterPageModule {}
