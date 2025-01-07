import React, { useEffect, useRef, useState } from "react";
import { View, Text, PermissionsAndroid, Platform } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";

interface BarcodeReaderProps {
  onBarcodeRead: (event: any) => void;
}

const BarcodeReader: React.FC = () => {
  const HandleOnBarcodeRead = () => {
    console.log("BarcodeReader");
  };

  return <View style={{ flex: 1 }}>{HandleOnBarcodeRead()}</View>;
  // const devices = useCameraDevices();
  // const device = devices.back;
  // const cameraRef = useRef(null);
  // const [hasPermission, setHasPermission] = useState(false);

  // useEffect(() => {
  //   const requestCameraPermission = async () => {
  //     if (Platform.OS === 'android') {
  //       const status = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.CAMERA,
  //       );
  //       setHasPermission(status === PermissionsAndroid.RESULTS.GRANTED);
  //     } else {
  //       const status = await Camera.requestCameraPermission();
  //       setHasPermission(status === 'authorized');
  //     }
  //   };

  //   requestCameraPermission();
  // }, []);

  // const handleBarcodeDetected = ({ nativeEvent }: { nativeEvent: any }) => {
  //   if (onBarcodeRead) {
  //     onBarcodeRead(nativeEvent);
  //   }
  // };

  // if (device == null || !hasPermission) {
  //   return <Text>Sin acceso a la cámara</Text>;
  // }

  // return (
  //   <View style={{ flex: 1 }}>
  //     <Camera
  //       ref={cameraRef}
  //       style={{ flex: 1 }}
  //       device={device}
  //       isActive={true}
  //       onBarcodeDetected={handleBarcodeDetected}
  //     />
  //   </View>
  // );
};

export default BarcodeReader;
