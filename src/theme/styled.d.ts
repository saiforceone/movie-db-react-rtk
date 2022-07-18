/**
 * File: styled.d.ts
 * Created by: sai @ 7/15/22
 */

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
