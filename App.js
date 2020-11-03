import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons } from "@expo/vector-icons"

const Layout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}


const Colors = {
  theme: "#24685b",
  white: "#fff",
  greyish: "#a4a4a4"
};


export default function App(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={Colors.theme}
      />
      <View
        style={{
          backgroundColor: Colors.theme,
          paddingBottom: Layout.height * 0.2,
          borderBottomLeftRadius: Layout.width * 0.1,
          borderBottomRightRadius: Layout.width * 0.1
        }}>

        <View
          style={{
            alignItems: 'flex-end',
            paddingHorizontal: 32,
            marginVertical: 20
          }}>
          <SimpleLineIcons
            name="equalizer"
            size={20}
            style={{ color: Colors.white }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 32,
            marginVertical: 36,
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <Image
            source={require("./assets/user.png")}
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 16 }}
          />
          <View>
            <Text style={{ fontSize: 20, color: Colors.white }}>Cristian Baeza
            </Text>
            <Text style={{ color: Colors.greyish }}>React Native Dev</Text>
          </View>
        </View>
      </View>

      <View>

      </View>
    </ScrollView>
  );
}


