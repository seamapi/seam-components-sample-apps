import {
  ConnectAccountButton,
  DeviceTable,
  SeamProvider,
} from '@seamapi/react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <h1>Seam Components</h1>
      <div>
        <SeamProvider publishableKey="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL">
          <ConnectAccountButton />
          <DeviceTable
            onDeviceClick={(deviceId) => {
              console.log(deviceId)
            }}
          />
        </SeamProvider>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
