import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HeroHome from '../Components/Home/HeroHome'
import ContentHome from '../Components/Home/ContentHome'
const Home = () => {

    return (
        <ScrollView>
            <HeroHome />
            <ContentHome />
        </ScrollView>
    )
}

export default Home