// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.savio.test',
  appName: 'moodlemobile',
  webDir: 'www',
  cordova: {
    preferences: {
      'permissions': 'none',
      'orientation': 'default',
      'target-device': 'universal',
      'fullscreen': 'false',
      'stay-in-webview': 'false',
      'webviewbounce': 'false',
      'UIWebViewBounce': 'false',
      'DisallowOverscroll': 'true',
      'prerendered-icon': 'true',
      'AppendUserAgent': 'MoodleMobile 5.1.0 (51000)',
      'BackupWebStorage': 'none',
      'ScrollEnabled': 'true',
      'KeyboardDisplayRequiresUserAction': 'false',
      'HideKeyboardFormAccessoryBar': 'false',
      'KeyboardResizeMode': 'none',
      'AllowInlineMediaPlayback': 'true',
      'LoadUrlTimeoutValue': '60000',
      'load-url-timeout': '60000',
      'AutoHideSplashScreen': 'false',
      'android-minSdkVersion': '24',
      'android-targetSdkVersion': '36',
      'AndroidPersistentFileLocation': 'Compatibility',
      'AndroidInsecureFileModeEnabled': 'true',
      'CustomURLSchemePluginClearsAndroidIntent': 'true',
      'deployment-target': '13.0',
      'iosPersistentFileLocation': 'Compatibility',
      'iosScheme': 'moodleappfs',
      'WKWebViewOnly': 'true',
      'WKFullScreenEnabled': 'true',
      'AndroidXEnabled': 'true',
      'GradlePluginGoogleServicesEnabled': 'true',
      'GradlePluginGoogleServicesVersion': '4.4.2',
      'GradlePluginKotlinVersion': '1.9.24',
      'StatusBarOverlaysWebView': 'false',
      'StatusBarBackgroundColor': '#FFFFFF',
      'NavigationBarBackgroundColor': '#FFFFFF',
      'AndroidEdgeToEdge': 'true',
    },
  },
  plugins: {
    cordova: {
      disabledPlugins: [
        'cordova-plugin-moodleapp',
      ],
    },
  },
};

export default config;
