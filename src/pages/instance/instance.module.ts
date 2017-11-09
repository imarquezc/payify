import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstancePage } from './instance';

@NgModule({
  declarations: [
    InstancePage,
  ],
  imports: [
    IonicPageModule.forChild(InstancePage),
  ],
})
export class InstancePageModule {}
