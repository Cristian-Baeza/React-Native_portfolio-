import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity, Slider, Linking } from 'react-native';
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import { Icon } from 'react-native-elements'


const Layout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}


const Colors = {
  theme: "#24685b",
  //  "#24685b"
  white: "#fff",
  // "#fff"

  greyish: "#a4a4a4"
};

//used map function so i can add skills to here and they
// will be mapped out in app
const skillIcons = [
  "language-html5",
  "language-css3",
  "language-javascript",
  "language-python",
  "react",
  "bootstrap"
]


const projects = [
  {
    name: "Gym Website",
    icon: "airballoon"
  },
  {
    name: "Mediation App",
    icon: "microphone"
  },
  {
    name: "Shopping List",
    icon: "shopping-music"
  },
];



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
            style={{ width: 80, height: 80, borderRadius: 25, marginRight: 16 }}
          />
          <View>
            <Text style={{ fontSize: 30, color: Colors.white }}>Cristian Baeza
            </Text>
            <Text style={{ color: Colors.greyish }}>Web-Dev/React Native Dev</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: Colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 8,
          marginBottom: 16,
          marginTop: -Layout.height * 0.15
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8
          }}>
          <Text>Bio</Text>
          <AntDesign name="user" size={20} />
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={{ color: Colors.greyish }}>
          Currently a full time student doing my last semester at the University of Utah, working full time and attending NuCamp's Full-Stack coding bootcamp. Accepted into CodePlatoon's full time coding bootcamp starting in January 2021.
          </Text>
        </View>
      </View>

      {/* SECOND CARD: SKILLS */}

      <View
        style={{
          backgroundColor: Colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 8,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8
          }}>
          <Text>Skills</Text>
          <MaterialCommunityIcons name="pen" size={20} />
        </View>
        <ScrollView horizontal style={{ marginVertical: 8 }}>
          {skillIcons.map(skill => (
            <View style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              borderWidth: 2,
              borderColor: Colors.theme,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 5
            }}
            >
              <MaterialCommunityIcons
                name={skill}
                size={30}
                style={{ color: Colors.theme }}
              />
            </View>
          ))}
        </ScrollView>
      </View>


      {/* PROJECTS PART  */}

      <ScrollView horizontal>
        {projects.map(project => (
          <View
            key={project.name}
            style={{
              backgroundColor: Colors.theme,
              marginHorizontal: 8,
              padding: 20,
              borderRadius: 16,
              marginBottom: 16,
              alignItems: "center",
              width: Layout.width * 0.7
            }}
          >
            <Text style={{ fontSize: 20, color: Colors.white }}>
              {project.name}
            </Text>
            <MaterialCommunityIcons
              name={project.icon}
              size={150}
              style={{ color: Colors.white, marginVertical: 40 }}
            />
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  paddingVertical: 10
                }}
              >
                <Text style={{ color: Colors.theme }}>View Project</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>


      {/* STATS CARD  */}

      <View
        style={{
          backgroundColor: Colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 8,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8
          }}>
          <Text>Stats</Text>
          <MaterialCommunityIcons name="trending-up" size={20} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 8,
            alignItems: 'flex-end'
          }}
        >
          <Text style={{ fontSize: 50, color: Colors.theme }}>10,000</Text>
          <Text style={{ color: Colors.greyish }}>CUPS OF COFFEE</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 8,
            alignItems: 'flex-end'
          }}
        >
          <Text style={{ color: Colors.greyish }}>PROJECTS DONE</Text>
          <Text style={{ fontSize: 50, color: Colors.theme }}>10</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 8,
            alignItems: 'flex-end'
          }}
        >
          <Text style={{ fontSize: 50, color: Colors.theme }}>32</Text>
          <Text style={{ color: Colors.greyish }}>HAPPY CLIENTS</Text>
        </View>
      </View>


      {/* FIND ME CARD */}

      <View
        style={{
          backgroundColor: Colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 8,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8
          }}>
          <Text>Find Me</Text>
        </View>
        <ScrollView horizontal style={{ marginVertical: 8 }}>
          <Icon
            name= 'github'
            type='font-awesome'
            size={30}
            style={{ color: Colors.theme }}
          />
          <MaterialCommunityIcons
            name="linkedin"
            size={30}
            style={{ color: Colors.theme }}
          />
          <MaterialCommunityIcons
            name='youtube'
            size={30}
            style={{ color: Colors.theme }}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}


