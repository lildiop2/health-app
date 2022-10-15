import React,{useState} from "react";
import{TextInput, View, Text, TouchableOpacity } from "react-native";
import ResultIMC from "../ResultIMC";
import styles from "./style";
export default function Form () {
    const [height, setHeight]=useState(null);
    const [weight, setWeight]=useState(null);
    const [messageIMC, setMessageIMC]=useState("Preencha o peso e a Altura");
    const [imc, setImc]=useState(null);
    const [textButton, setTextButton]=useState("Calcular");
    function imcCalculator (){
        return setImc((weight/height**2).toFixed(2));
    }

    function validationImc (){
        if(weight!=null && height!=null) {
            imcCalculator();
            setWeight(null);
            setHeight(null);
            setMessageIMC("Seu imc é igual: ");
            setTextButton("Calcular novamente");
            return
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageIMC("Preencha o peso e a altura")
    }

    return (
        <View style={styles.formContext}>
           <View style={styles.form}>
            <Text style={styles.formLabel}> Altura </Text>
            <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"></TextInput>
            <Text style={styles.formLabel} >Peso</Text>
            <TextInput style={styles.input}  onChangeText={setWeight} value={weight} placeholder="Ex. 70.25" keyboardType="numeric"></TextInput>
            <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()} title={textButton}>
                <Text style={styles.textButton}>{textButton}</Text>
            </TouchableOpacity>
           </View>
           <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
        </View>
    );
}