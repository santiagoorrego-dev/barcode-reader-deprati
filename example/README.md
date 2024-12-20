# React Native Barcode Reader Example

This is an example application demonstrating how to use the `BarcodeReader` component from the `barcode-reader-deprati` library.

## Getting Started

To run this example app, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/barcode-reader-deprati.git
   cd barcode-reader-deprati/example
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   - For iOS:
     ```bash
     npx react-native run-ios
     ```
   - For Android:
     ```bash
     npx react-native run-android
     ```

## Usage

The `BarcodeReader` component utilizes the React Native Vision Camera to scan barcodes. Once the camera is active, it will automatically detect barcodes and return the scanned data.

### Example Code

Here is a simple example of how to use the `BarcodeReader` component in your application:

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import BarcodeReader from 'barcode-reader-deprati/src/BarcodeReader';

const App = () => {
  const handleBarcodeRead = (data) => {
    console.log('Scanned barcode data:', data);
  };

  return (
    <View style={{ flex: 1 }}>
      <BarcodeReader onBarcodeRead={handleBarcodeRead} />
      <Text>Scan a barcode!</Text>
    </View>
  );
};

export default App;
```

## Troubleshooting

- Ensure that you have the necessary permissions set up for camera access in both Android and iOS.
- If you encounter any issues, check the console for error messages and refer to the documentation for further assistance.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.