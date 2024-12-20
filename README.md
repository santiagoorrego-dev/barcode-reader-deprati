# barcode-reader-deprati

## Installation

To install the `barcode-reader-deprati` module, run the following command:

```bash
npm install barcode-reader-deprati
```

## Usage

To use the `BarcodeReader` component in your React Native application, import it as follows:

```javascript
import BarcodeReader from 'barcode-reader-deprati';
```

### Example

Here is a simple example of how to use the `BarcodeReader` component:

```javascript
import React from 'react';
import { View } from 'react-native';
import BarcodeReader from 'barcode-reader-deprati';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <BarcodeReader
        onBarcodeRead={(data) => {
          console.log('Barcode data:', data);
        }}
      />
    </View>
  );
};

export default App;
```

## Features

- Utilizes React Native Vision Camera for barcode scanning.
- Handles camera permissions automatically.
- Provides callback for detected barcode data.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.