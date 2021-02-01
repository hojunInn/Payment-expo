import {Platform} from 'react-native';

// console.group('Initialize');
// console.log('CONSTATNTS : ', Constants.manifest.extra);
// Alert.alert(Config.SERVER_URL);
// console.log(`SERVER CONNECTED TO [ ${Constants.manifest.extra.serverUrl} ]`);
// console.log('Platform = ', Constants.platform);
// console.groupEnd();

export const httpLinkURI = Platform.OS === 'web' ? '' : process.env.SERVER_URL;
export const webSocketURI = process.env.WEBSOCKET_URL;
export const searchURL = process.env.SEARCH_URL;
export const feedSocketURI = process.env.FEEDSOCKET_URL;
