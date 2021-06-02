import React,{useEffect,useState} from 'react'
import { Text, StatusBar, View, SafeAreaView, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getCovidData } from '../actions/covid.tracker.action';

const Dashboard = () => {

    const [covidData, setCovidData] = useState(null);
    const [countryData, setCountryData] = useState([]);

    const dispatch = useDispatch();
    useEffect(async ()=>{
       dispatch(getCovidData());
    },[])


    const data = useSelector(state => state.covidDataReducer.data);
    console.log("data", data);
   
    
    // console.log("key", Object.getOwnPropertyNames(data)); 

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={"#4169E1"} />

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#4169E1' }}>
                    <View style={{ marginTop: '30%', justifyContent: 'center' }}>
                        <Text style={styles.title}>Covid Tracker</Text>
                        <Text style={{ textAlign: 'center', fontSize: 24, color: '#fff', fontWeight: '700' }}>INDIA</Text>
                    </View>

                    <View style={{ marginTop: '10%', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 24, color: '#fff', fontWeight: '600' }}>State</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: '10%', marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Case Update</Text>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#A9A9A9' }}>Newest update on</Text>
                    </View>

                    <View style={{
                        marginTop: '5%', flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: '5%',
                        paddingRight: '10%'
                    }}>

                        <View style={{
                            height: 100, backgroundColor: '#fff',
                            elevation: 5,
                            borderRadius: 5,
                            borderColor: '#000',
                            justifyContent: 'center'
                            , marginRight: 20, width: '50%'
                        }}>

                            <Text style={{
                                textAlign: 'center',
                                fontWeight: '600', color: '#ff073a', fontSize: 16
                            }}>Confirmed</Text>

                            <Text style={{
                                textAlign: 'center',
                                fontWeight: '600', color: '#ff073a', fontSize: 14
                            }}>2,00,000</Text>
                        </View>

                        <View style={{
                            height: 100, backgroundColor: '#fff',
                            elevation: 5,
                            borderRadius: 5,
                            borderColor: '#000',
                            justifyContent: 'center',
                            width: '50%'
                        }}>

                            <Text style={{
                                textAlign: 'center',
                                fontWeight: '600', color: '#007bff', fontSize: 16
                            }}>Active</Text>

                            <Text style={{
                                textAlign: 'center',
                                fontWeight: '600', color: '#007bff', fontSize: 14
                            }}>2,00,000</Text>
                        </View>

                    </View>

                    <View style={{
                        marginTop: '5%', flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: '5%',
                        paddingRight: '10%',
                    }}>

                        <View style={{
                            height: 100, backgroundColor: '#fff',
                            elevation: 5,
                            borderRadius: 5,
                            borderColor: '#000',
                            justifyContent:'center'
                            , marginRight: 20, width: '50%'
                        }}>

                            <Text style={{
                                textAlign: 'center',
                                fontWeight: '600', color: '#28a745', fontSize: 14
                            }}>Recovered</Text>

                            <Text style={{
                                textAlign: 'center',
                                fontWeight: '600', color: '#28a745', fontSize: 12
                            }}>2,00,000</Text>
                        </View>

                        <View style={{
                            height: 100, backgroundColor: '#fff',
                            elevation: 5,
                            borderRadius: 5,
                            borderColor: '#000',
                            justifyContent:'center'
                            , marginRight: 20, width: '50%'
                        }}>

                            <Text style={{
                                textAlign: 'center',
                                marginTop: 10,
                                fontWeight: '600', color: '#6c757d', fontSize: 16
                            }}>Deaths</Text>

                            <Text style={{
                                textAlign: 'center',
                                marginTop: 10,
                                fontWeight: '600', color: '#6c757d', fontSize: 14
                            }}>2,00,000</Text>
                        </View>

                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },title:{
         textAlign: 'center', 
         fontSize: 24, 
         color: '#fff', 
         fontWeight: '600'
    }


});
