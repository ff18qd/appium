## What is appPackage and appActivity?
appPackage the technical name of the app. For example, WhatsApp is a social name. com.whatsapp is technical name from 
developers. 
appActivity is the main screen you want to land or test from the beginning. 

## How to find appPackage and appActivity?
Using adb command
* For Mac/Linux: adb shell dumpsys window | grep -E 'mCurrentFocus' 
* For Windows: adb shell dumpsys window | find "mCurrentFocus"

## Sample
https://github.com/appium/appium/tree/master/sample-code/javascript-webdriverio

## What's next?
Use mocha and chai to rewrite the test