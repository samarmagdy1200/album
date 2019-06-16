import React from 'react';
import{View, StyleSheet} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.cardStyle}>{props.children}</View>
    )

    

}

const styles = StyleSheet.create({
    cardStyle: {
        margin: 20,
        flex: 1,
        flexDirection: 'row',
        

    }
})
export default CardSection;