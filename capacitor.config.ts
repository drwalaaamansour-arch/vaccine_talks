import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Vaccine Talks loads the hosted Next.js site in a native WebView.
 * Override for local dev: CAPACITOR_SERVER_URL=http://YOUR_LAN_IP:3000
 */
const productionOrigin = 'https://www.vaccinetalks.com';
const devServerUrl = process.env.CAPACITOR_SERVER_URL?.trim();

const config: CapacitorConfig = {
  appId: 'com.vaccinetalks.app',
  appName: 'Vaccine Talks',
  webDir: 'capacitor-web',
  server: devServerUrl
    ? {
        url: devServerUrl,
        cleartext: devServerUrl.startsWith('http://'),
        androidScheme: 'https',
      }
    : {
        url: productionOrigin,
        androidScheme: 'https',
      },
  android: {
    allowMixedContent: false,
    captureInput: true,
  },
  ios: {
    contentInset: 'automatic',
    scrollEnabled: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      launchAutoHide: true,
      backgroundColor: '#355a63',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#355a63',
    },
  },
};

export default config;
