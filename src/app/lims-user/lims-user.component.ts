
import { HelpPage } from './../pages/help/help';
import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import {AcknowledgementPage} from '../pages/acknowledgement/acknowledgement';
import {RecommendationPage} from '../pages/recommendation/recommendation';
import {WishListPage} from '../pages/wishList/wishList';


@Component({
  templateUrl: './lims-user.component.html'
})
export class LimsUserComponent {
 @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
 
  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openAcknowledgement()
{
  this.nav.push(AcknowledgementPage);
} 
 openHelp()
{
  this.nav.push(HelpPage);
} 
 openWishList()
{
  this.nav.push(WishListPage);
}

// doLogout(){
//    this.userData.logout();
// }

}
