import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  TutorHome: NavigatorScreenParams<TutorTabParamList>;
  WalkerHome: NavigatorScreenParams<WalkerTabParamList>;
};

export type TutorTabParamList = {
  Home: undefined;
  Agendamentos: undefined;
};

export type WalkerTabParamList = {
  Dashboard: undefined;
  Histórico: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}