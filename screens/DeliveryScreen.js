import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { resetBasket } from "../features/basketSlice";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();

  const resetBasketItems = () => {
    dispatch(resetBasket());
    navigation.navigate("Home");
  };

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5 mt-2">
          <TouchableOpacity onPress={resetBasketItems}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white rounded-md p-6 mx-5 my-2 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View className="">
              <Text className="text-lg text-gray-400">Estimate Arrival</Text>
              <Text className="text-3xl font-bold">45 - 55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://media1.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif?cid=6c09b952zuwueh0tm1zhmxcydegrybcvtevdijmoltgv0urk&rid=giphy.gif&ct=s",
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />

          <Text className="text-gray-500 mt-3">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>


      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 z-0 -mt-10"
        mapType="mutedStandard"
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        >
          <Image
            source={require("../assets/custom-marker.png")}
            style={{ width: 50, height: 50, tintColor: "#00CCBB" }}
          />
        </Marker>
      </MapView>


      <SafeAreaView className="bg-white flex-row h-28 items-center space-x-5">
        <Image
          source={{
            uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
          }}
          className="h-12 w-12 rounded-full ml-5 p-4 bg-gray-300"
        />
        <View className="flex-1">
          <Text className="text-lg">Courier Name</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
