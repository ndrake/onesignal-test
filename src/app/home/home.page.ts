import { Component } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from '../../environments/environment';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private oneSignal: OneSignal,
    private platform: Platform) {}

  async promptForNotifications() {
    this.oneSignal.setLocationShared(false);
    this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });
    var iosSettings = {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: true
    };
    this.oneSignal.iOSSettings(iosSettings);

    this.oneSignal.startInit(environment.oneSignalAppId, environment.senderId);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe(data => {
      console.log('notification recieved.');
    });

    this.oneSignal.handleNotificationOpened().subscribe(data => {
      console.log('notification opened.');
    });

    this.oneSignal.endInit();
    if (this.platform.is('ios')) {
      // Prompt user to for Push permission
      let allowNotifs = await this.oneSignal.promptForPushNotificationsWithUserResponse();
    }


  }
}
