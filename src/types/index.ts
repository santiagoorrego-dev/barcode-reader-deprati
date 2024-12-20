export interface BarcodeData {
    type: string;
    data: string;
    bounds: {
        origin: {
            x: number;
            y: number;
        };
        size: {
            width: number;
            height: number;
        };
    };
}

export interface BarcodeReaderProps {
    onBarcodeRead: (data: BarcodeData) => void;
    onPermissionDenied?: () => void;
    style?: object;
}