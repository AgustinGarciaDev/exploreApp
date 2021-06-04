import React, { useEffect, useState } from "react"
import { StyleSheet, ScrollView, View, Text, TextInput } from "react-native"
import RNPickerSelect from 'react-native-picker-select';
import { Button } from "react-native-elements"

const Checkout = (props) => {
    const { navigation, route } = props
    const [countries, setCountries] = useState([])
    const [form, setForm] = useState({ email: "", firstName: "", lastName: "", adress: "", apartment: "", city: "", country: "", postCode: "", phone: "" })

    console.log(props)

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(data => data.json())
            .then(data => setCountries(data.map(country => ({ label: country.name, value: country.name }))))
            .catch(err => console.log(err))
    }, [])


    return <>
        <ScrollView style={styles.mainContainer}>

            <View>
                <View style={styles.containers}>
                    <Text style={styles.texts}>Email</Text>
                    <TextInput onChangeText={v => setForm({ ...form, email: v })} style={styles.input} placeholder="Email" />
                </View>

                <View style={styles.containers}>
                    <Text style={styles.texts}>First ame</Text>
                    <TextInput onChangeText={v => setForm({ ...form, firstName: v })} style={styles.input} placeholder="First name" />
                </View>

                <View style={styles.containers}>
                    <Text style={styles.texts}>Last name</Text>
                    <TextInput onChangeText={v => setForm({ ...form, lastName: v })} style={styles.input} placeholder="Last name" />
                </View>

                <View style={styles.containers}>
                    <Text style={styles.texts}>Adress</Text>
                    <TextInput onChangeText={v => setForm({ ...form, adress: v })} style={styles.input} placeholder="Adress" />
                </View>

                <View style={styles.containers}>
                    <Text style={styles.texts}>Apartment </Text>
                    <TextInput onChangeText={v => setForm({ ...form, apartment: v })} style={styles.input} placeholder="Apartment" />
                </View>

                <View style={styles.containers}>
                    <Text style={styles.texts}>City </Text>
                    <TextInput onChangeText={v => setForm({ ...form, city: v })} style={styles.input} placeholder="City" />
                </View>

                <View style={styles.containers}>
                    <Text style={styles.texts}>Country </Text>

                    <RNPickerSelect
                        useNativeAndroidPickerStyle={true}
                        style={styles.select}
                        onValueChange={(value) => value}
                        items={countries && countries}
                    />
                </View>

                <View style={styles.containers}>
                    <Text style={styles.texts}>Post code </Text>
                    <TextInput onChangeText={v => setForm({ ...form, postCode: v })} style={styles.input} placeholder="Post code" />
                </View>

                <View style={styles.containers}>
                    <Text style={styles.texts}>Phone </Text>
                    <TextInput onChangeText={v => setForm({ ...form, phone: v })} style={styles.input} placeholder="Phone" />
                </View>

            </View>

            <Button
                title="let's do it"
                buttonStyle={styles.payButton}
                onPress={() => navigation.navigate("CreditCard", form)}
            />


        </ScrollView>

        <View style={styles.totalCotainer}>
            <Text style={styles.textTotal}>Total to pay</Text>
            <Text style={styles.textTotal}>$600</Text>
        </View>
    </>
}

export default Checkout


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    containers: {
        margin: "0.5%"
    },
    texts: {
        fontSize: 15
    },
    input: {
        height: 45,
        borderColor: "#CDCDCD",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 5
    },
    select: {
        height: 50,
        width: 50
    },
    totalCotainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4%",
        backgroundColor: "#F1ECEB"
    },
    textTotal: {
        fontSize: 17
    },
    payButton: {
        margin: "3%",
        backgroundColor: "green"
    }
})