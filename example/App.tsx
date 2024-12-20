import React, { useState } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import BarcodeReader from '../src/BarcodeReader';

const App = () => {
  const [barcodeData, setBarcodeData] = useState<string | null>(null);

  const handleBarcodeRead = (data: string) => {
    setBarcodeData(data);
  };

  return (
    <SafeAreaView>
      <BarcodeReader onBarcodeRead={handleBarcodeRead} />
      {barcodeData && <Text>Scanned Barcode: {barcodeData}</Text>}
      <Button title="Clear" onPress={() => setBarcodeData(null)} />
    </SafeAreaView>
  );
};

export default App;