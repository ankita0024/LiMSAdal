import { Http } from '@angular/http';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HelpPage} from '../pages/help/help';
import { NotificationPage } from '../pages/notification/notification';
import { SearchPage } from './../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AcknowledgementPage} from '../pages/acknowledgement/acknowledgement';
import {RecommendationPage} from '../pages/recommendation/recommendation';
import {WishListPage} from '../pages/wishList/wishList';
import {FilterPage} from '../pages/filter/filter';
import { LimsAdminComponent } from './lims-admin/lims-admin.component';
import { LimsUserComponent } from './lims-user/lims-user.component'; 


@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    HelpPage,
    NotificationPage,
    HomePage,
    TabsPage,
    RecommendationPage,
    WishListPage,
    AcknowledgementPage,
    FilterPage,
    LimsUserComponent,
    LimsAdminComponent

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    HelpPage,
    NotificationPage,
    HomePage,
    TabsPage,
     RecommendationPage,
    WishListPage,
    AcknowledgementPage,
    FilterPage,
    LimsUserComponent,
    LimsAdminComponent

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},]
})
export class AppModule {}
