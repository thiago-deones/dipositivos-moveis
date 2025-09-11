import { Text, Image, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Image source={require('../img/relogio.png')} style={style.image}/>
      <View style={style.actions}>
        <Text style={style.timer}>22:00</Text>
        <Pressable style={style.button}>
          <Text style={style.textButton}>Começar</Text>
        </Pressable>
      </View>
      <View style={style.footer}>
        <Text style={style.textfooter}>Curso de react native</Text>
        <Text style={style.textfooter}>2025 - Meu App</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#021123",
    gap:40,
  },
  actions:{
    padding:24,
    backgroundColor: "#14448080",
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap:32,
  },
  timer:{
    fontSize: 54,
    color: '#FFF',
    textAlins: 'center',
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
  },
  textButton:{
    textAlign:'center',
    color: '#021123',
    fontSize: 18,
  },
  footer:{
    width:'80%',
    textAlign:'center',
  },
  textfooter:{
    textAlign:'center',
    fontWeight:'bold',
    color: '#98A0A8',
    fontSize:12.5
  }

})