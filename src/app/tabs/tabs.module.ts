import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { AddPageModule } from '../add/add.module';
import { EditPageModule } from '../edit/edit.module';
import { HomePageModule } from '../home/home.module';
import { DetailsPageModule } from '../details/details.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AddPageModule,
    EditPageModule,
    DetailsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
