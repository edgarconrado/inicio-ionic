import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToatsPageRoutingModule } from './toats-routing.module';

import { ToatsPage } from './toats.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToatsPage]
})
export class ToatsPageModule {}
