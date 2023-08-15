import { View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { useTheme } from "native-base";

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}