import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const lançamentos = [
    { title: 'Camiseta Corinthians', title: 'Quantidade: 200', price: 'R$ 350,00', image: require('./src/Corinthians.jpeg') },
    { title: 'Camiseta Flamengo', title: 'Quantidade: 200', price: 'R$ 350,00', image: require('./src/Flamengo.jpeg') },
    { title: 'Camiseta Fluminense', title: 'Quantidade: 200', price: 'R$ 150,00', image: require('./src/Fluminense.jpeg') },
    { title: 'Camiseta Brasil', title: 'Quantidade: 200', price: 'R$ 450,00', image: require('./src/Brasil.jpeg') },
    { title: 'Camiseta Portugal', title: 'Quantidade: 200', price: 'R$ 350,00', image: require('./src/Portugal.jpeg') },
    { title: 'Camiseta Santos', title: 'Quantidade: 200', price: 'R$ 150,00', image: require('./src/Santos.jpeg') },
    { title: 'Camiseta Vasco', title: 'Quantidade: 200', price: 'R$ 100,00', image: require('./src/Vasco.jpeg') },
    { title: 'Camiseta São Paulo', title: 'Quantidade: 200', price: 'R$ 350,00', image: require('./src/SP.jpeg') },
  ];

  // ... outras categorias de produtos

  const europeus = [
    { title: 'Camiseta Halland', title: 'Quantidade: 200', price: 'R$ 450,00', image: require('./src/Halland.jpeg') },
    { title: 'Camiseta PSG', title: 'Quantidade: 200', price: 'R$ 250,00', image: require('./src/PSG.jpeg') },
    { title: 'Camiseta Borrusia', title: 'Quantidade: 200', price: 'R$ 350,00', image: require('./src/Borrusia.jpeg') },
    { title: 'Camiseta Liverpool', title: 'Quantidade: 200', price: 'R$ 250,00', image: require('./src/Liverpool.jpeg') },
    { title: 'Camiseta Bayern', title: 'Quantidade: 200', price: 'R$ 350,00', image: require('./src/Bayern.jpeg') },
    { title: 'Camiseta Milan', title: 'Quantidade: 200', price: 'R$ 450,00', image: require('./src/Milan.png') },
  ];

  const conjuntos = [
    { title: 'Conjunto Juventos', title: 'Quantidade: 200', price: 'R$ 300,00', image: require('./src/conjuntoJuve.jpeg') },
    { title: 'Conjunto Flamengo', title: 'Quantidade: 200', price: 'R$ 400,00', image: require('./src/ConjuntoFlamengo.jpeg') },
    { title: 'Conjunto Brasil', title: 'Quantidade: 200', price: 'R$ 500,00', image: require('./src/BrasilConjunto.jpeg') },
    { title: 'Conjunto Internacional', title: 'Quantidade: 200', price: 'R$ 250,00', image: require('./src/Internacional.jpg') },
    { title: 'Conjunto Milan', title2: 'Quantidade: 200', price: 'R$ 250,00', image: require('./src/Milan.jpeg') },
    { title: 'Conjunto Inglaterra', title: 'Quantidade: 200', price: 'R$ 350,00', image: require('./src/Inglaterra.jpeg') },
    { title: 'Conjunto Real Madrid', title: 'Quantidade: 200', price: 'R$ 550,00', image: require('./src/ConjutoReal.jpeg') },
    { title: 'Conjunto Barcelona', title: 'Quantidade: 200', price: 'R$ 300,00', image: require('./src/ConjuntoBarça.jpeg') }
  ];

  const chuteiras = [
    { title: 'Chuteira Nike Vermelha', title: 'Quantidade: 200', price: 'R$ 300,00', image: require('./src/ChuteiraVer.jpeg') },
    { title: 'Chuteira Nike Azul', title: 'Quantidade: 200', price: 'R$ 300,00', image: require('./src/chuteiraNike.jpeg') },
    { title: 'Chuteira Adidas Verde', title: 'Quantidade: 200', price: 'R$ 230,00', image: require('./src/ChuteiraVerde.jpeg') },
    { title: 'Chuteira Nike Azul', title: 'Quantidade: 200', price: 'R$ 290,00', image: require('./src/ChuteiraNike2.jpeg') },
    { title: 'Chuteira Umbro', title: 'Quantidade: 200', price: 'R$ 200,00', image: require('./src/ChuteiraUmbro.jpeg') },
    { title: 'Chuteira Adidas Azul', title: 'Quantidade: 200', price: 'R$ 280,00', image: require('./src/ChuteiraAdidas.jpeg') },
  ];

  const bolas = [
    { title: 'Bola Nike', title: 'Quantidade: 200', price: 'R$ 140,00', image: require('./src/bolaNike.jpeg') },
    { title: 'Bola Topper', title: 'Quantidade: 200', price: 'R$ 120,00', image: require('./src/bolaTopper.jpeg') },
    { title: 'Bola Umbro', title: 'Quantidade: 200', price: 'R$ 100,00', image: require('./src/umbro.jpg') },
    { title: 'Bola Super Bola', title: 'Quantidade: 200', price: 'R$ 80,00', image: require('./src/SuperBola.jpeg') },
    { title: 'Bola Nike', title: 'Quantidade: 200', price: 'R$ 150,00', image: require('./src/BolaNike2.jpeg') },
    { title: 'Bola Final League', title: 'Quantidade: 200', price: 'R$ 180,00', image: require('./src/BolaChapions.jpeg') },
  ];


  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.menutext}>FUTSHOP</Text>
      </View>
      <View style={styles.linha}></View>
      <View style={styles.banner}>
        <Image
          source={require('./src/BANNER.png')}
          style={{ width: '100%', height: 200 }}
        />
      </View>
      <View style={styles.linha}></View>
      <ScrollView>
        <RenderProducts title="Lançamentos" products={lançamentos} navigation={navigation} />
        {/* Renderize outras categorias de produtos */}
        <Footer />
      </ScrollView>
    </View>
  );
};

const RenderProducts = ({ title, products, navigation }) => (
  <>
    <Text style={styles.sectionTitle}>{title}:</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carousel}>
      {products.map((product, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('ProductDetails', { product })}>
          <Image
            source={product.image}
            style={{ width: '100%', height: 250, marginBottom: 10 }}
          />
          <Text style={styles.cardTitle}>{product.title}</Text>
          <Text style={styles.cardPrice}>{product.price}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </>
);

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Obrigado Por Acessar Nosso Site!!!!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menu: {
    height: 60,
    backgroundColor: '#1919e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2: {
    fontSize: 20,
    color: '#fff',
  },
  linha: {
    height: 5,
    backgroundColor: '#181818',
  },
  menutext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  banner: {
    marginTop: 0,
    width: 420, 
  },
  carousel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  card: {
    width: 250, 
    borderWidth: 1,
    borderColor: '#1414b8',
    borderRadius: 5,
    padding: 10, 
    marginRight: 10,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 0,
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 18,
    color: 'green',
  },
  footer: {
    backgroundColor: '#1919e6',
    padding: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
