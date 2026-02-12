import { WebView } from 'react-native-webview';

export default function ExperienciaScreen() {
  return (
    <WebView
      source={{ uri: 'https://youtu.be/oJiTlDOSKls' }}
      style={{ flex: 1, backgroundColor: '#000' }}
    />
  );
}
