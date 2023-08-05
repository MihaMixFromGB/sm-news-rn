import React, {useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import {Header} from './src/components/Header';
import {Home} from './src/components/Home';
import {NewsFeed} from './src/components/NewsFeed';
import {Footer} from './src/components/Footer';

export default function App() {
  const [section, setSection] = useState('Новости');

  return (
    <View style={styles.container}>
      <Header title={section} />
      {section === 'Главная' && <Home />}
      {section === 'Новости' && <NewsFeed />}
      <Footer section={section} onChange={setSection} />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
});
