import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Avatar from './components/avatar';
import Button from './components/button';
import Footer from './components/footer';
import Header from './components/header';
import Skills from './components/skills';
import UserCard from './components/userCard';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Avatar />
      <UserCard />
      <Skills />
      <Button />
      <Footer />
    </SafeAreaView>
  );
}