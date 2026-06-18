declare module "react-simple-maps" {
  import { ComponentType, ReactNode } from "react";

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, any>;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    children?: ReactNode;
    className?: string;
  }

  interface GeographyProps {
    geography: any;
    className?: string;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    onMouseEnter?: (e: React.MouseEvent) => void;
    onMouseLeave?: (e: React.MouseEvent) => void;
    onClick?: (e: React.MouseEvent) => void;
  }

  interface GeographiesProps {
    geography: string | object;
    children: (data: { geographies: any[]; projection: any; path: any }) => ReactNode;
  }

  interface MarkerProps {
    coordinates: [number, number];
    className?: string;
    style?: React.CSSProperties;
    onMouseEnter?: (e: React.MouseEvent) => void;
    onMouseLeave?: (e: React.MouseEvent) => void;
    onClick?: (e: React.MouseEvent) => void;
    children?: ReactNode;
  }

  interface LineProps {
    from: [number, number];
    to: [number, number];
    stroke?: string;
    strokeWidth?: number;
    strokeDasharray?: string;
    strokeLinecap?: string;
    style?: React.CSSProperties;
  }

  interface SphereProps {
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    className?: string;
  }

  interface GraticuleProps {
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    className?: string;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const Line: ComponentType<LineProps>;
  export const Sphere: ComponentType<SphereProps>;
  export const Graticule: ComponentType<GraticuleProps>;
}
