import { WebView } from 'react-native-webview';

export default function ExperienciaScreen() {
  return (
    <WebView
      source={{ uri: 'https://www.youtube.com/embed/TU_VIDEO_ID' }}
      style={{ flex: 1, backgroundColor: '#000' }}
    />
  );
}
