# barcode-reader-deprati

## Instalación

Para instalar el módulo `barcode-reader-deprati`, ejecuta el siguiente comando:

```bash
npm install barcode-reader-deprati
```

## Uso

Para usar el componente `BarcodeReader` en tu aplicación React Native, impórtalo de la siguiente manera:

```javascript
import BarcodeReader from 'barcode-reader-deprati';
```

### Ejemplo

Aquí tienes un ejemplo sencillo de cómo usar el componente `BarcodeReader`:

```javascript
import React from 'react';
import { View } from 'react-native';
import BarcodeReader from 'barcode-reader-deprati';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <BarcodeReader />
    </View>
  );
};

export default App;
```

## Características

- Utiliza React Native Vision Camera para escanear códigos de barras.
- Maneja automáticamente los permisos de la cámara.
- Proporciona una función de callback para los datos del código de barras detectado.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.