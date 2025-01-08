import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { BarcodeFormat, useScanBarcodes } from 'vision-camera-code-scanner';

const BarcodeReader = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [barcode, setBarcode] = useState<string | null>(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.EAN_13]);

  useEffect(() => {
    const getPermissions = async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    };

    getPermissions();
  }, []);

  useEffect(() => {
    if (barcodes.length > 0 && !barcode) {
      setBarcode(barcodes[0].displayValue);
      Alert.alert('Barcode Detected', `Barcode: ${barcodes[0].displayValue}`);
    }
  }, [barcodes, barcode]);

  if (device == null) return <Text>Loading...</Text>;
  if (!hasPermission) return <Text>No camera permission</Text>;

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />
      {barcode && (
        <View style={styles.barcodeContainer}>
          <Text style={styles.barcodeText}>Barcode: {barcode}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barcodeContainer: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  barcodeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BarcodeReader;