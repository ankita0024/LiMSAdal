import { LimsAdminComponent } from './lims-admin/lims-admin.component';
 import { LimsUserComponent } from './lims-user/lims-user.component'; 
import { HelpPage } from './../pages/help/help';
import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import {AcknowledgementPage} from '../pages/acknowledgement/acknowledgement';
import {RecommendationPage} from '../pages/recommendation/recommendation';
import {WishListPage} from '../pages/wishList/wishList';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
 constructor(){}
}
