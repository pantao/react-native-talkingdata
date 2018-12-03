import { NativeModules } from 'react-native';

const nativeModule = NativeModules.TalkingDataAPI;


export function trackPageBegin(page) {
  nativeModule.trackPageBegin(page);
}

export function trackPageEnd(page) {
  nativeModule.trackPageEnd(page);
}

export function trackEvent(en, el, parameters) {
  nativeModule.trackEvent(en, el, parameters);
}

export function setLocation(latitude, longitude) {
  nativeModule.setLocation(latitude, longitude);
}

export function getDeviceID() {
  return new Promise(resolve=>{
    nativeModule.getDeviceID(resolve);
  })
}

export async function applyAuthCode(countryCode, mobile, requestId) {
  return await nativeModule.applyAuthCode(countryCode, mobile, requestId);
}

export async function verifyAuthCode(countryCode, mobile, authCode) {
  return await nativeModule.verifyAuthCode(countryCode, mobile, authCode);
}
