import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import * as Icons from 'phosphor-react-native'
import Button from "@/components/Button";
import { useRouter } from "expo-router";
const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);
  const handelSubmit = async () =>{
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert('Login', 'Please fill all the fields');
      return;
    }
    console.log('email: ', emailRef.current);
    console.log('password: ', passwordRef.current);
    console.log('good to go ');
    
  }
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* back button*/}
        <BackButton iconSize={28} />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={800}>
            Hey,
          </Typo>
          <Typo size={30} fontWeight={800}>
            Welcome Back
          </Typo>
        </View>
        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Login in now to track all your espenses
          </Typo>
          <Input
          onChangeText={value=> emailRef.current = value}
          placeholder="Enter your email"
          icon={<Icons.At size={verticalScale(26)} color={colors.neutral300} weight="fill"/>}
          />
          <Input
          onChangeText={value=> passwordRef.current = value}
          placeholder="Enter your password"
          secureTextEntry
          icon={<Icons.Lock size={verticalScale(26)} color={colors.neutral300} weight="fill"/>}
          />
          <Typo size={14} color={colors.text} style={{alignSelf : 'flex-end'}}>Forget password</Typo>
          <Button onPress={handelSubmit}
          loading={isloading}
          >
            <Typo fontWeight={'700'} color={colors.black} size={21}>Login In</Typo>
          </Button>
        </View>
        {/* footer */}
        <View style={styles.footer}>
            <Typo size={15}>Don't have an account?</Typo>
            <Pressable onPress={() => router.navigate('/(auth)/register')}>
              <Typo size={15} fontWeight={'700'}
              color={colors.primary}
              >Sign up</Typo>
            </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingX._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
});
