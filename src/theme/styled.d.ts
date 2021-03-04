import 'styled-components/native';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        color: {
            base: string;
            white: string;
            primary: string;
            primaryVariant: string;
            primaryInactive: string;
            secondary: string;
            oldSecondary: string;
            textLight: string;
            error: string;
            black: string;
            textBlack: string;
            textGray: string;
            base50: string;
            base25: string;
            base5: string;
            fieldLight: string;
            surfaceOverlay: string;
        };
    }
}
