import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const contatos = [
  { id: '1', nome: 'Alice', telefone: '11 99999-0001', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', nome: 'Bruno', telefone: '11 99999-0002', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', nome: 'Carla', telefone: '11 99999-0003', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', nome: 'Diego', telefone: '11 99999-0004', avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', nome: 'Elisa', telefone: '11 99999-0005', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: '6', nome: 'Felipe', telefone: '11 99999-0006', avatar: 'https://i.pravatar.cc/150?img=6' },
];

export default function TelaB() {
  return (
    <View style={styles.container}>
      <FlatList data={contatos} keyExtractor={(item) => item.id} numColumns={1} 
      renderItem={({ item, index }) => (
          <View style={[styles.card, { backgroundColor: index % 2 === 0 ? '#E0F7FA' : '#FCE4EC' }]}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.telefone}>{item.telefone}</Text>
          </View>
        )}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 70 // espaço para o menu inferior
  },
  lista: {
    justifyContent: 'center',
    gap: 10
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
    elevation: 2
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  telefone: {
    fontSize: 14,
    color: '#666'
  }
});