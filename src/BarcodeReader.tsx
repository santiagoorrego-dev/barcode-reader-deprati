import React from "react";
import { StyleSheet } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";

const BarcodeReader: React.FC = () => {
  const devices = useCameraDevices("wide-angle-camera");
  const device = devices.back;

  const { hasPermission } = useCameraPermission();

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  if (!hasPermission) return <></>;
  if (device == null) return <></>;
  return (
    <Camera
      style={styles.absoluteFill}
      device={device}
      isActive={true}
      codeScanner={codeScanner}
    />
  );
};

const styles = StyleSheet.create({
  absoluteFill: {
    ...StyleSheet.absoluteFill,
  },
});

export default BarcodeReader;
