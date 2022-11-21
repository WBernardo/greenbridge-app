import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { size } from "../constants";

export const Home = () => {
  const navigation = useNavigation();

  const print = () => {
    console.log("Hello");
  };

  const projects = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1551736947-ca1f44a894e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
      name: "Projeto SP Verde",
      description: "Reflorestamento das margens do Rio Pinheiros",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1628206554909-917554b5f145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
      name: "Sol para todos",
      description: "Usinas solares em escolas ribeirinhas do Norte Brasileiro",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1668203767485-11c13cc6ebbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
      name: "S.O.S Mata Atlântica",
      description: "Proteção e conservação da Mata Atlântica",
    },
    {
      id: "4",
      image:
        "https://diariodorio.com/wp-content/uploads/2019/03/naom_55bc9761aef67.jpg",
      name: "Rio da Vida",
      description: "Adequação de Balneabilidade na Baía de Guanabara",
    },
  ];

  const Item = ({ image, name, description }) => (
    <View
      style={{
        backgroundColor: "white",
        height: 140,
        width: 420,
        marginRight: 10,
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
            fontFamily: size.Bold,
            fontSize: 22,
            paddingTop: 5,
            lineHeight: 28,
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
          onPress={print}
          style={{ marginLeft: 10, marginRight: 10 }}
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
            <Text style={{ color: "white", fontFamily: size.Regular }}>
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
          {`Olá,\nMatheus Gagliardi.`}
        </Text>
        <View
          style={{
            padding: 15,
            backgroundColor: "#31A078",
            height: 150,
            marginTop: 30,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              paddingBottom: 10,
              lineHeight: 27,
              fontFamily: size.Medium,
            }}
          >
            Saldo disponível para investimentos:
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: size.Bold, fontSize: 32, color: "white" }}>
              R$ 8.600
            </Text>

            <TouchableHighlight
              onPress={print}
              activeOpacity={0.6}
              underlayColor="#31A078"
            >
              <View
                style={{
                  width: "auto",
                  borderRadius: 15,
                  alignItems: "center",
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                <Text style={{ fontFamily: size.Medium, color: "#31A078" }}>
                  Invista já!
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Details", {projects})}> 
        <Text
          style={{
            alignContent: "center",
            textAlign: "right",
            color: "#FE555D",
            paddingTop: "10%",
            fontSize: 18,
            fontFamily: size.Medium
          }}
        >
          Ver todos &#187;
        </Text>
        </TouchableOpacity>

        <View style={{ paddingTop: "10%", paddingBottom: "5%" }}>
          <Text style={{ fontSize: 22, lineHeight: 28, fontFamily: size.Bold }}>
            Conheça nossos projetos:
          </Text>
        </View>

        <FlatList
          data={projects}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
