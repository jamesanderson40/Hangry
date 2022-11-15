import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapView, { Marker } from "react-native-maps";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";

const FoodItemScreen = (props) => {
  const [regions, setRegion] = useState();
  const [location, setLocation] = useState();

  const config = {
    headers: {
      Authorization:
        "Bearer " +
        "t1R9JL_fdbCXkaGQgXH8pkAqZArlzouTAAXgxuwQqbnTjvrnv7XyEt3SBdW_Y0X_wxdem0vmkTOL7qHhlC2-5xJLvrxogrq_qNYdNzvy8atAsNdse9TZ19xTxOw0Y3Yx",
    },
  };

  useEffect(() => {
    const fetchNearbyPlacesWithYelp = async () => {
      return axios
        .get(
          `https://api.yelp.com/v3/businesses/search?term=${props.item[0]}&latitude=` +
            37.78512559702932 +
            "&longitude=" +
            -122.40923406868654 +
            "&radius=" +
            1609 +
            "&limit=" +
            10,
          config
        )
        .then((responseJson) => {
          // Get places’ names and images.
          //   const allCoordinates = place.map((item) => item.coordinates);

          const markers = responseJson.data.businesses.map((x) => ({
            coordinates: x.coordinates,
            image: x.image_url,
            alias: x.alias,
          }));
          setRegion(markers);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchNearbyPlacesWithYelp();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        disableDefaultUI={true}
        showsUserLocation={true}
        style={{ height: "100%", width: "100%" }}
        initialRegion={{
          latitude: 37.78512559702932,
          latitudeDelta: 0.10717637181992501,
          longitude: -122.40923406868654,
          longitudeDelta: 0.10526644606053992,
        }}
      >
        {regions &&
          regions.map((region, index) => {
            // console.log(region);
            return (
              <Marker
                title={region.alias}
                coordinate={{
                  longitude: region.coordinates.longitude,
                  latitude: region.coordinates.latitude,
                }}
                key={index}
              >
                <Image
                  source={{ url: region.image }}
                  style={{ height: 50, width: 50 }}
                />
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
};

export default FoodItemScreen;
const styles = StyleSheet.create({});
