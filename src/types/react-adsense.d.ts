
declare module 'react-adsense' {
  import { Component } from 'react';

  interface AdsenseProps {
    client: string;
    slot: string;
    format?: string;
    responsive?: string;
    style?: React.CSSProperties;
    layout?: string;
    layoutKey?: string;
    fullWidthResponsive?: boolean;
    adTest?: string;
    className?: string;
    adSenseAttributes?: {
      [key: string]: string;
    };
  }

  export default class Adsense extends Component<AdsenseProps> {}
}
