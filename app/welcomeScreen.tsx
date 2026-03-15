import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/fundo.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height:50
      }}
    >
      <Image
        source={require("@/assets/images/nome.png")}
        style={{ width: 440, height: 400, resizeMode: "contain", marginTop: 50}}
      />
    </View>

        <View style={styles.logoContainer}>


        </View>

        {/* TITULO */}
        <Text style={styles.title}>
          Seja bem-vindo ao Bela Escala!
        </Text>

        {/* CARD */}
        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Como usar o Bela Escala
          </Text>

          <Text style={styles.cardSubtitle}>
            Um passo a passo para você começar
          </Text>

          {/* VIDEO */}
          <View style={styles.videoContainer}>
            <Image
             // source={require("@/assets/images/video-thumb.png")}
              style={styles.video}
            />

            <View style={styles.playButton}>
              <Text style={styles.play}>▶</Text>
            </View>
          </View>

          <Text style={styles.cardFooter}>
            Um passo a passo para você começar
          </Text>

        </View>

        {/* BOTÃO */}
        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={["#F2D39B", "#D6B06A"]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Vamos lá
            </Text>
          </LinearGradient>
        </TouchableOpacity>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  bg: {
    flex: 1,
    backgroundColor: "#000",
  },

  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    height:50
  },

  logo: {
    width: 160,
    height: 80,
    resizeMode: "contain",
  },

  title: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 20,
  },

  card: {
    width: "100%",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#D6B06A",
    padding: 18,
    marginBottom: 40,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 6,
  },

  cardSubtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 15,
  },

  videoContainer: {
    position: "relative",
    borderRadius: 14,
    overflow: "hidden",
  },

  video: {
    width: "100%",
    height: 180,
  },

  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
      { translateX: -30 },
      { translateY: -30 },
    ],
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  play: {
    color: "#fff",
    fontSize: 28,
  },

  cardFooter: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 12,
  },

  button: {
    width: 260,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },

});