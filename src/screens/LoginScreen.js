import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.logo} source={require('../img/LogoGrande.png')} />

        <View style={styles.login}>
          <Text style={styles.titulo}>Login</Text>

          <KeyboardAvoidingView behavior={'padding'}>
            <View style={styles.email}>
              <Text style={styles.labelEmail}>Email</Text>
              <TextInput style={styles.inputEmail} />
            </View>
          </KeyboardAvoidingView>

          <View style={styles.password}>
            <Text style={styles.labelPassword}>Password</Text>
            <TextInput style={styles.inputPassword} />
          </View>

          <View style={styles.naoPossuiConta}>
            <Text style={styles.text}>Ainda não tem conta?</Text>
            <TouchableOpacity style={styles.link} onPress={() => { navigation.navigate('CadastroLogin') }}>
              <Text style={styles.linkTxt}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Home') }}>
            <Text style={styles.btnTxt}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
  },
  login: {
    marginTop: 60,
    alignItems: 'center',
  },
  titulo: {
    color: '#4788c6',
    fontSize: 64,
  },
  email: {
    marginTop: 20,
    alignItems: 'center',
  },
  labelEmail: {
    color: '#4788c6',
    fontSize: 16,
    fontFamily: '',
    textTransform: 'uppercase',
  },
  inputEmail: {
    marginTop: 5,
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#d9d9d9',
  },
  password: {
    marginTop: 20,
    alignItems: 'center',
  },
  labelPassword: {
    color: '#4788c6',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  inputPassword: {
    marginTop: 5,
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#d9d9d9',
  },
  naoPossuiConta: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    color: '#000000',
  },
  link: {
    marginLeft: 5
  },
  linkTxt: {
    fontSize: 12,
    color: '#4788c6'
  },
  btn: {
    marginTop: 30,
    width: 150,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#4788c6',
    justifyContent: 'center',
  },
  btnTxt: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  }



})