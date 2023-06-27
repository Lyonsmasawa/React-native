import React from 'react';
import {View, StyleSheet, Image, Dimensions, useWindowDimensions} from 'react-native';

const PostPreview = () => {
    const {width, height} = useWindowDimensions()

    return (
        <View style={styles.container} >
            <Image style={{width: width - 20, height: width - 20}} source={{uri: 'https://images.unsplash.com/photo-1477544437652-fdfbf813e056?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NTQzMjAzOHw&ixlib=rb-4.0.3&q=85&w=1920'}} />
        </View>
    );
}

// const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        
    },
})

export default PostPreview;
