import React from "react";
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, TouchableHighlight} from "react-native";
import { size } from "../constants";

export const Details = ({ route, navigation }) => {
  const { projects } = route.params;

  const Item = ({ image, name, description }) => (
    <View
      style={{
        backgroundColor: "white",
        height: 140,
        width: "auto",
        marginTop: '10%',
        marginBottom: 10,
        borderRadius: 8,
        flexDirection: "row",
      }}
    >
      <Image
        style={{
          width: "40%",
          borderBottomLeftRadius: 8,
          borderTopLeftRadius: 8,
        }}
        source={{
          uri: `${image}`,
        }}
      />
      <View
        style={{
          width: "60%",
          backgroundColor: "#fff",
          borderBottomRightRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Text
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 5,
            fontSize: 17,
            fontFamily: size.Bold
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            fontSize: 14,
            lineHeight: 16,
            fontFamily: size.Regular
          }}
        >
          {description}
        </Text>

        <TouchableHighlight
        //   onPress={print}
          style={{ marginLeft: 10, marginTop: "auto", marginBottom: 10, marginRight: 10 }}
          activeOpacity={0.6}
          underlayColor="white"
        >
          <View
            style={{
              width: "100%",
              borderRadius: 15,
              alignItems: "center",
              padding: 10,
              alignContent: "center",
              backgroundColor: "#31A078",
            }}
          >
            <Text style={{fontSize: 14, fontFamily: size.Regular, color: "white" }}>
              Conheça o projeto
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.name} image={item.image} description={item.description} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text style={{ marginTop: "20%", fontSize: 32, fontFamily: size.Bold }}>
          Confira os projetos que disposmos atualmente:
        </Text>

        <TouchableOpacity onPress={() => navigation.goBack()}> 
        <Text
          style={{
            alignContent: "center",
            textAlign: "right",
            color: "#FE555D",
            paddingTop: 10,
            fontSize: 18,
            fontFamily: size.Medium
          }}
        >
        &#171; Voltar
        </Text>
        </TouchableOpacity>

        <FlatList
          data={projects}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
