import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

const Loader = (props) => {
  return (
    <>
     	<View style={styles.container}>
         <ActivityIndicator color="#ffffff" size="large" />
        </View>
   
    </>
  );
};

const styles = StyleSheet.create({
    container : {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 99,
      alignItems:'center',
      justifyContent: "center"
    }
});

export default Loader;