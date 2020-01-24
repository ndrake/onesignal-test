# onesignal-test

Sample app to demonstrate [issue #533](https://github.com/OneSignal/OneSignal-iOS-SDK/issues/533)

# Running

1. Clone repo
2. Edit config.xml and change the app id from "io.ionic.starter" to something else
3. Follow [OneSignal instructions](https://documentation.onesignal.com/docs/generate-an-ios-push-certificate) for creating iOS Push Cert
4. Create App in OneSignal dashboard and configure with push cert created in previous step
5. Edit environment.ts and set `oneSignalAppId` to match App Id created in step 4 (you can leave sender alone)
6. ```npm install```
7. ```ionic cordova prepare ios```
8. ```ionic cordova build ios``` (this will fail)
9. Open project in XCode ```open platforms/ios/MyApp.xcworkspace```
10. In the "Signing & Capabilities" section of the project settings select a "Team" and otherwise configure the project so XCode will stop complaining
11. Attach iOS device
12. Run the project using XCode
13. When the app starts, it will prompt you for Location Permissions. Click some form of "Allow"
14. Click "Prompt for Nofication" button
15. Click "Allow" on Notification permission modal
16. Load OneSignal dashboard (Audience | All Users)
17. Notice the newly created Player will have Location data set, even those this sample app calls `setLocationShared(false)` in `home.page.ts`