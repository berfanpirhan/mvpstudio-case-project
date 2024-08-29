import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { ThyIcon } from "./AirlineIcons";
import { LandingIcon, TakeoffIcon, PlaneDestinationIcon } from "./TicketIcons";
import styles from "./styles/ticketStyles";

const PlaneTicket = ({ flight, onRemove }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ticket} onPress={openModal}>
        {/* Ticket content */}
        <View style={styles.header}>
          <View style={styles.airlineInfo}>
            <ThyIcon />
            <Text style={styles.airlineText}>{flight.flightNumber}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.airlineName}>{flight.airline}</Text>
          </View>
          <View style={styles.flightTimeContainer}>
            <Text style={styles.flightTime}>{flight.flightDuration}</Text>
          </View>
        </View>
        <View style={styles.leftEllipseMask}>
          <View style={styles.ellipse} />
        </View>
        <View style={styles.rightEllipseMask}>
          <View style={styles.ellipse} />
        </View>
        <View style={styles.bottomSection}>
          <View style={[styles.takeoffInfo, styles.leftAligned]}>
            <View style={styles.takeoffRow}>
              <TakeoffIcon />
              <Text style={[styles.takeoffText, { marginLeft: "5%" }]}>
                {flight.takeoffDate}
              </Text>
            </View>
            <Text style={styles.cityName}>{flight.fromCity}</Text>
            <Text style={styles.takeoffTime}>{flight.takeoffTime}</Text>
          </View>
          <PlaneDestinationIcon />
          <View style={[styles.takeoffInfo, styles.rightAligned]}>
            <View style={styles.takeoffRow}>
              <LandingIcon />
              <Text style={[styles.takeoffText, { marginLeft: "5%" }]}>
                {flight.landingDate}
              </Text>
            </View>
            <Text style={styles.cityName}>{flight.toCity}</Text>
            <Text style={styles.takeoffTime}>{flight.landingTime}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        style={styles.modal}
        backdropColor="black"
        backdropOpacity={0.7}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        animationInTiming={300}
        animationOutTiming={300}
        hideModalContentWhileAnimating={true}
      >
        <View style={styles.modalContent}>
          <View style={[styles.ticket, { borderWidth: 0, overflow: "hidden" }]}>
            {/* Repeated ticket content */}
            <View style={styles.header}>
              <View style={styles.airlineInfo}>
                <ThyIcon />
                <Text style={styles.airlineText}>{flight.flightNumber}</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.airlineName}>{flight.airline}</Text>
              </View>
              <View style={styles.flightTimeContainer}>
                <Text style={styles.flightTime}>{flight.flightDuration}</Text>
              </View>
            </View>
            <View
              style={[
                styles.leftEllipseMask,
                { backgroundColor: "#000000B3", borderWidth: 0 },
              ]}
            >
              <View style={[styles.ellipse, { borderWidth: 0 }]} />
            </View>
            <View
              style={[
                styles.rightEllipseMask,
                { backgroundColor: "#000000B3" },
              ]}
            >
              <View style={[styles.ellipse, { borderWidth: 0 }]} />
            </View>
            <View style={styles.bottomSection}>
              <View style={[styles.takeoffInfo, styles.leftAligned]}>
                <View style={styles.takeoffRow}>
                  <TakeoffIcon />
                  <Text style={[styles.takeoffText, { marginLeft: "5%" }]}>
                    {flight.takeoffDate}
                  </Text>
                </View>
                <Text style={styles.cityName}>{flight.fromCity}</Text>
                <Text style={styles.takeoffTime}>{flight.takeoffTime}</Text>
              </View>
              <PlaneDestinationIcon />
              <View style={[styles.takeoffInfo, styles.rightAligned]}>
                <View style={styles.takeoffRow}>
                  <LandingIcon />
                  <Text style={[styles.takeoffText, { marginLeft: "5%" }]}>
                    {flight.landingDate}
                  </Text>
                </View>
                <Text style={styles.cityName}>{flight.toCity}</Text>
                <Text style={styles.takeoffTime}>{flight.landingTime}</Text>
              </View>
            </View>
          </View>

          {/* Remove Flight Button */}
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => {
              onRemove();
              setModalVisible(false);
            }}
          >
            <Text style={styles.removeButtonText}>Remove Flight</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default PlaneTicket;
