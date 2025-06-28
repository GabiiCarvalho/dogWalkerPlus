// @types/react-navigation.d.ts
import 'react';
import '@react-navigation/native';

declare module '@react-navigation/bottom-tabs' {
  import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
  import type { ReactNode } from 'react';
  
  export interface BottomTabNavigationConfig {
    children?: ReactNode;
  }
  
  export interface BottomTabNavigatorProps {
    children?: ReactNode;
    screenOptions?: BottomTabNavigationOptions;
  }
}