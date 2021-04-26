import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { AgeLabel } from "../components/AgeLabel";

export function Home() {
  const [formData, setFormData] = useState("");
  const [ageList, setAgeList] = useState([1,2,3,4]);

  function insertAge() {
      if(formData){
          setAgeList([...ageList, Number(formData)])
          setFormData("")
      }
  }

  function calcAgeAverage(){
      const ageAverage = ageList.reduce((oldValue,currentValue) => oldValue + currentValue, 0) / ageList.length
      const ageAverageWithFormat = ageAverage.toFixed(2)
      Alert.alert("O valor da média das idades é", String(ageAverageWithFormat))
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Idades</Text>
      <View style={styles.form}>
        <TextInput
          keyboardType="numeric"
          style={styles.inputForm}
          value={formData}
          onChangeText={setFormData}
          autoCorrect={false}
          maxLength={3}
        />
        <TouchableOpacity style={styles.buttonForm} onPress={insertAge}>
          <Text style={styles.buttonTextForm}>Inserir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={ageList}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <AgeLabel content={item} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
      <TouchableOpacity style={styles.buttonSubmit} onPress={calcAgeAverage}>
        <Text style={styles.textButtonSubmit}>Calcular Média</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 40,
    padding: 20,
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 12,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  inputForm: {
    backgroundColor: "white",
    flex: 2,
    padding: 12,
    borderRadius: 8,
    marginRight: 12,
  },
  buttonForm: {
    backgroundColor: "#1ABC9C",
    padding: 12,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonTextForm: {
    fontSize: 24,
    color: "#353535",
    fontWeight: "700",
  },
  containerList: {
    flex: 1,
    height: 100,
  },
  list: {
    marginTop: 20,
    padding: 12,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
  },
  buttonSubmit: {
    marginTop: 20,
    backgroundColor: "#3498DB",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  textButtonSubmit: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  age: {
    color: "#824DF2",
    fontSize: 24,
    fontWeight: "bold",
  },
});
