import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <ImageBackground
      source={require("@/assets/images/fundo.png")}
      resizeMode="cover"
      style={styles.background}
      imageStyle={styles.bgImage}
    >
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" />

        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
            <Ionicons name="chevron-back" size={28} color="#D8B36A" />
          </TouchableOpacity>
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
          <View style={styles.header}>
            <Text style={styles.title}>Esqueceu a senha?</Text>
            <Text style={{color: "#ffff", fontSize: 16}}>Digite seu e-mail para recuperar sua senha.</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputWrapper}>
              <Feather name="mail" size={18} color="#D8B36A" style={styles.leftIcon} />
              <TextInput
                value={form.name}
                onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
                placeholder="Seu e-mail"
                placeholderTextColor="#C7C7C7"
                style={styles.input}
              />
            </View>
            <TouchableOpacity activeOpacity={0.85} style={styles.primaryButtonShadow}>
              <LinearGradient
                colors={["#E9CD8A", "#D2A85A", "#E7CC8B"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.primaryButton}
              >
                <Text style={styles.primaryButtonText}>Enviar link de recuperação</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton} activeOpacity={0.85}>
              <Text style={styles.googleButtonText}>Cancelar</Text>
            </TouchableOpacity>

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Lembrou sua senha?</Text>

            </View>
            <TouchableOpacity activeOpacity={0.7} style={{alignItems: "center"}}>
                <Text style={styles.footerLink}>Entrar</Text>
           </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const GOLD = "#D8B36A";
const GOLD_DARK = "#8F6A2E";
const BORDER = "rgba(216, 179, 106, 0.45)";
const INPUT_BG = "rgba(14, 14, 14, 0.72)";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#050505",
  },

  bgImage: {
    opacity: 0.9,
  },

  safe: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    marginBottom: 6,
  },

  logoBlock: {
    alignItems: "center",
    marginTop: 2,
    marginBottom: 14,
  },

  logoIconWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
    height: 34,
  },

  logoIcon: {
    color: GOLD,
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 18,
  },

  logoIconSmall: {
    marginTop: -4,
    fontSize: 14,
    opacity: 0.95,
  },

  logoText: {
    color: GOLD,
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: 1.2,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 26,
  },

  title: {
    color: "#F6F2EA",
    fontSize: 28,
    fontWeight: "400",
    marginBottom: 6,
  },

  subtitle: {
    color: "#C6C6C6",
    fontSize: 15,
    fontWeight: "400",
  },

  form: {
    marginTop: 4,
  },

  inputWrapper: {
    height: 54,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: BORDER,
    backgroundColor: INPUT_BG,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  leftIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    color: "#F7F7F7",
    fontSize: 17,
  },

  rightIconButton: {
    position: "absolute",
    right: 14,
    height: "100%",
    justifyContent: "center",
  },

  helperText: {
    color: "#D4D4D4",
    fontSize: 13,
    textAlign: "center",
    marginTop: -2,
    marginBottom: 18,
  },

  primaryButtonShadow: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 18,
    shadowColor: "#D2A85A",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },

  primaryButton: {
    height: 54,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#24201A",
    fontSize: 18,
    fontWeight: "700",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(216, 179, 106, 0.28)",
  },

  dividerText: {
    color: "#CFCFCF",
    fontSize: 15,
    marginHorizontal: 12,
  },

  googleButton: {
    height: 54,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: GOLD,
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 18,
    marginTop: 2
  },

  googleButtonText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "600",
  },

  termsText: {
    color: "#CBCBCB",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 22,
    paddingHorizontal: 10,
    marginBottom: 34,
  },

  termsLink: {
    color: GOLD,
    textDecorationLine: "underline",
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  footerText: {
    color: "#D7D7D7",
    fontSize: 16,
  },

  footerLink: {
    color: GOLD,
    fontSize: 16,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});