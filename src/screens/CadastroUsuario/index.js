import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { db } from '../../configs/firebase';
import { ref, set, push, child } from "firebase/database";

import { UserContext } from '../../contexts/user';


export default function CadastroUsuarioScreen({ navigation }) {

  const { setCadastrado } = useContext(UserContext);

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');

  const user = {
    nome: nome,
    sobrenome: sobrenome,
    dataNascimento: dataNascimento,
    peso: peso,
    altura: altura,
    sexo: sexo,
    logradouro: logradouro,
    numero: numero,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    cep: cep,
  }

  async function cadastrar() {
    const id = push(child(ref(db), 'usuario')).key
    set(ref(db, `/usuario/${id}`), user)
      .catch((error) => {
        alert(error.message);
      })
    navigation.replace('Home');
    alert('Cadastrado com sucesso!')
    setCadastrado(true)
  }

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/img/LogoPequena.png')} />
        <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/img/Voltar.png')} />
        </TouchableOpacity>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>Cadastro - Usuário</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu nome'
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <Text style={styles.label}>Sobrenome</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu sobrenome'
            value={sobrenome}
            onChangeText={(text) => setSobrenome(text)}
          />
          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua data de nascimento'
            value={dataNascimento}
            onChangeText={(text) => setDataNascimento(text)}
          />
          <View style={styles.pesoEAltura}>
            <View style={styles.gap}>
              <Text style={styles.label}>Peso</Text>
              <TextInput
                style={styles.inputPesoEAltura}
                placeholder='Digite seu peso'
                value={peso}
                onChangeText={(text) => setPeso(text)}
              />
            </View>
            <View>
              <Text style={styles.label}>Altura</Text>
              <TextInput
                style={styles.inputPesoEAltura}
                placeholder='Digite sua altura'
                value={altura}
                onChangeText={(text) => setAltura(text)}
              />
            </View>
          </View>
          <Text style={styles.label}>Sexo</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite o sexo'
            value={sexo}
            onChangeText={(text) => setSexo(text)}
          />
          <Text style={styles.label}>Logradouro</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu logradouro'
            value={logradouro}
            onChangeText={(text) => setLogradouro(text)}
          />
          <Text style={styles.label}>Número</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite o número'
            value={numero}
            onChangeText={(text) => setNumero(text)}
          />
          <Text style={styles.label}>Bairro</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu bairro'
            value={bairro}
            onChangeText={(text) => setBairro(text)}
          />
          <Text style={styles.label}>Cidade</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua cidade'
            value={cidade}
            onChangeText={(text) => setCidade(text)}
          />
          <Text style={styles.label}>Estado</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu estado'
            value={estado}
            onChangeText={(text) => setEstado(text)}
          />
          <Text style={styles.label}>Cep</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu cep'
            value={cep}
            onChangeText={(text) => setCep(text)}
          />

          <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btn} onPress={cadastrar}>
              <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 30,
    marginLeft: 34,
    marginRight: 34,
  },
  voltar: {
    marginTop: 30,
  },
  containerTitulo: {
    alignItems: 'center',
    marginTop: 10,
  },
  titulo: {
    fontSize: 30,
    color: '#4788c6',
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: '#4788c6',
    marginBottom: 2,
  },
  input: {
    width: 330,
    height: 35,
    backgroundColor: '#d9d9d9',
    borderRadius: 4,
    padding: 2,
    marginBottom: 10,
  },
  pesoEAltura: {
    flexDirection: 'row',
  },
  inputPesoEAltura: {
    width: 160,
    height: 35,
    backgroundColor: '#d9d9d9',
    borderRadius: 4,
    padding: 2,
    marginBottom: 10,
  },
  gap: {
    marginRight: 10,
  },
  containerBtn: {
    alignItems: 'center',
    marginBottom: 30,
  },
  btn: {
    marginTop: 30,
    width: 150,
    height: 40,
    backgroundColor: '#4788c6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  btnTxt: {
    fontSize: 18,
    color: 'white',
  },


})