import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { PlaneHighlightIcon } from "../../components/TabBarIcons";
import { PlusIcon } from "../../components/PlusIcon";
import PlaneTicket from "../../components/Ticket";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateRandomFlight } from "../../utilities/dataGenerator";
import styles from "../Flights/flightsStyles";

const { height } = Dimensions.get("window");

const FlightsPage = () => {
  const [flights, setFlights] = useState([]);

  const loadFlights = async () => {
    try {
      const storedFlights = await AsyncStorage.getItem("flights");
      if (storedFlights) {
        setFlights(JSON.parse(storedFlights));
      }
    } catch (error) {
      console.error("Error loading flights:", error);
    }
  };

  const addFlight = async () => {
    const newFlight = generateRandomFlight(flights.length);
    const updatedFlights = [...flights, newFlight];

    setFlights(updatedFlights);
    await AsyncStorage.setItem("flights", JSON.stringify(updatedFlights));
  };

  const removeFlight = async (flightId) => {
    const updatedFlights = flights
      .filter((flight) => flight.id !== flightId)
      .map((flight, index) => ({
        ...flight,
        id: `flight-${index}`,
        flightNumber: `${flight.flightNumber.split(" ")[0]} ${String(
          index + 1
        ).padStart(4, "0")}`,
      }));

    setFlights(updatedFlights);
    await AsyncStorage.setItem("flights", JSON.stringify(updatedFlights));
  };

  useEffect(() => {
    loadFlights();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Flights</Text>
          <TouchableOpacity
            style={{ marginTop: height * 0.05 }}
            onPress={addFlight}
          >
            <PlusIcon size={24} />
          </TouchableOpacity>
        </View>
        {flights.length > 0 ? (
          <FlatList
            data={flights}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PlaneTicket
                flight={item}
                onRemove={() => removeFlight(item.id)}
              />
            )}
          />
        ) : (
          <View style={styles.centeredView}>
            <PlaneHighlightIcon />
            <Text style={styles.topText}>No Flights Added Yet</Text>
            <Text style={styles.subText}>
              Let's get started on your jet lag plan! Add your upcoming flights
              to begin your journey.
            </Text>
            <TouchableOpacity style={styles.button} onPress={addFlight}>
              <Text style={styles.buttonText}>Add Flight</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FlightsPage;
