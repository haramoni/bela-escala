import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{alignItems: "center"}}>
        <Image source={require("@/assets/images/nome.png")} style={{height: 200, width: 500}}/>
        </View>

        <Text style={styles.welcome}>Bem-vindo de volta!</Text>

        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#8f8f8f"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#8f8f8f"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!showPassword}
              style={styles.input}
            />
            <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>

            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} activeOpacity={0.85}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.linkPrimary}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/forgotPassword")} activeOpacity={0.8}>
            <Text style={styles.linkSecondary}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>ou continue com</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.85}>
            <Text style={styles.googleIcon}>G</Text>
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton} activeOpacity={0.85}>
            <Text style={styles.socialButtonText}>Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const GOLD = "#C89B2A";
const GOLD_LIGHT = "#F3D36B";
const GOLD_DARK = "#8A5C08";
const BLACK = "#050505";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BLACK,
  },

  container: {
    flex: 1,
    backgroundColor: BLACK,
    paddingHorizontal: 32,
    paddingTop: 48,
    alignItems: "center",
  },

  logoWrapper: {
    marginTop: 12,
    marginBottom: 26,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    fontSize: 34,
    fontWeight: "700",
    letterSpacing: 1,
    color: GOLD_LIGHT,
    textShadowColor: "rgba(200, 155, 42, 0.45)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },

  welcome: {
    color: "#E5E5E5",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "center",
  },

  form: {
    width: "100%",
    gap: 14,
  },

  inputWrapper: {
    width: "100%",
    minHeight: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(200, 155, 42, 0.7)",
    backgroundColor: "rgba(255,255,255,0.03)",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: GOLD,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },

  input: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
    marginRight: 12,
  },

  loginButton: {
    marginTop: 8,
    height: 54,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GOLD,
    shadowColor: GOLD,
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  loginButtonText: {
    color: "#171717",
    fontSize: 18,
    fontWeight: "700",
  },

  linkPrimary: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 8,
  },

  linkSecondary: {
    color: "#8E8E8E",
    fontSize: 15,
    textAlign: "center",
    marginTop: 4,
  },

  dividerContainer: {
    width: "100%",
    marginTop: 38,
    marginBottom: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  dividerLine: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  dividerText: {
    backgroundColor: BLACK,
    paddingHorizontal: 14,
    color: "#6F6F6F",
    fontSize: 14,
    zIndex: 1,
  },

  socialRow: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
  },

  socialButton: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  socialButtonText: {
    color: "#111",
    fontSize: 16,
    fontWeight: "600",
  },

  googleIcon: {
    color: "#EA4335",
    fontSize: 20,
    fontWeight: "700",
  },
});