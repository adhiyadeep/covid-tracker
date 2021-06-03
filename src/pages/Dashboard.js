import React, { useEffect, useState } from 'react'
import { Text, StatusBar, View, SafeAreaView, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getCovidData } from '../actions/covid.tracker.action';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment'

const Dashboard = (props) => {

    const [countryData, setCountryData] = useState([]);
    const [state, setState] = useState('');
    const [date,setDate] = useState('');
    const [loading, setLoading] = useState(true);

    const [counts, setCounts] = useState({
        active: 0,
        confirmed: 0,
        deaths: 0,
        recovered: 0
    })

    const data = useSelector(state => state.covidDataReducer.data);
    if (data) {
        let keys = Object.keys(data);
        let values = Object.values(data)
        var allData = [];
        keys.forEach((el, i) => {
            allData.push({ state: el, data: values[i] })
        });
    }
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getCovidData());
        setCountryData(allData);
        setLoading(false);
        setDate(moment().format("DD MMM,YYYY HH:mm A"));
    }, [])

    const addCommas = (num) => {
        input = num;
        var n1, n2;
        num = num + '' || '';
        n1 = num.split('.');
        n2 = n1[1] || null;
        n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
        num = n2 ? n1 + '.' + n2 : n1;
        return num;
    }

    const onStateSelect = (id) => {
        let activeCount = 0;
        let confirmedCount = 0;
        let recoveredCount = 0;
        let deathsCount = 0;

        let state = countryData[id];
        let keys = Object.keys(state.data.districtData);
        let values = Object.values(state.data.districtData);
        let allStateData = [];

        keys.forEach((el, i) => {
            allStateData.push({ city: el, data: values[i] })
        });

        allStateData.forEach(el => {
            activeCount = activeCount + el.data.active;
            confirmedCount = confirmedCount + el.data.confirmed;
            recoveredCount = recoveredCount + el.data.recovered;
            deathsCount = deathsCount + el.data.deceased;
        });

        setCounts({
            active: addCommas(activeCount),
            confirmed: addCommas(confirmedCount),
            recovered: addCommas(recoveredCount),
            deaths: addCommas(deathsCount)
        })

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={"#4169E1"} />

            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Covid Tracker</Text>
                        <Text style={[styles.subTitle,styles.f700]}>INDIA</Text>
                    </View>

                    <View style={styles.pickerContainer}>
                        <Text style={[styles.subTitle,styles.f600]}>State</Text>
                        <Picker  
                             iosHeader="Select one"
                             mode="dropdown"
                            selectedValue={state}
                            onValueChange={(itemValue, itemIndex) => {
                                setState(itemIndex);
                                onStateSelect(itemIndex);
                            }}>
                            {(countryData && !loading) ? countryData.map((item, i) =>
                                <Picker.Item  color='white' label={item.state} value={i} key={i}/>
                            )
                                : <Picker.Item  color='white'  label={"No Data"} value={''}  key={''} />
                            }
                        </Picker>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: '10%', marginLeft: 10 }}>
                        <Text style={styles.font16,styles.f700}>Case Update</Text>
                        <Text style={styles.date}>Newest update on {date}</Text>
                    </View>

                    <View style={styles.casesContainer}>
                        <View style={styles.casesSubContainer}>
                            <Text style={[styles.textCenter,styles.f600,styles.colorConfrirmed,styles.font16]}>Confirmed</Text>
                            <Text style={[styles.textCenter,styles.f600,styles.colorConfrirmed,styles.font14]}>{counts.confirmed}</Text>
                        </View>

                        <View style={styles.casesSubContainer}>
                            <Text style={[styles.textCenter,styles.f600,styles.colorActive,styles.font16]}>Active</Text>
                            <Text style={[styles.textCenter,styles.f600,styles.colorActive,styles.font14]}>{counts.active}</Text>
                        </View>

                    </View>

                    <View style={styles.casesContainer}>
                        <View style={styles.casesSubContainer}>
                            <Text style={[styles.textCenter,styles.f600,styles.colorRecovered,styles.font16]}>Recovered</Text>
                            <Text style={[styles.textCenter,styles.f600,styles.colorRecovered,styles.font14]}>{counts.recovered}</Text>
                        </View>

                        <View style={styles.casesSubContainer}>
                            <Text style={[styles.textCenter,styles.f600,styles.colorDeath,styles.font16]}>Deaths</Text>
                            <Text style={[styles.textCenter,styles.f600,styles.colorDeath,styles.font14]}>{counts.deaths}</Text>
                        </View>

                    </View>
                </View>
            </View>

        </SafeAreaView >
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },header:{
        flex: 1, 
        backgroundColor: '#4169E1',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    }, title: {
        textAlign: 'center',
        fontSize: 24,
        color: '#fff',
        fontWeight: '600'
    },headerContainer:{
        marginTop: '30%',
        justifyContent: 'center'
    },subTitle:{
        textAlign: 'center', 
        fontSize: 24, 
        color: '#fff',
    },f700:{
        fontWeight:'700'
    },f600:{
        fontWeight:'600'
    },pickerContainer:{
        marginTop: '10%',
        justifyContent: 'center'
    },font16:{
        fontSize:16
    },font14:{
        fontSize:14
    },date:{
        fontSize:14,
        fontWeight:'700',
        color: '#A9A9A9'
    },casesContainer:{
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '10%'
    },casesSubContainer:{
        height: 100,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 5,
        borderColor: '#000',
        justifyContent: 'center',
        borderRadius:10,
        marginRight: 20,
         width: '50%'
    },colorActive:{
        color:'#007bff',
    },colorRecovered:{
        color:'#28a745'
    },colorDeath:{
        color: '#6c757d'
    },colorConfrirmed:{
        color:'#ff073a'
    },textCenter:{
        textAlign:'center'
    }
});


export default Dashboard;