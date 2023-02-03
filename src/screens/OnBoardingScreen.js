import {
  StyleSheet,
  Text,
  View,
  FlatList,
  useWindowDimensions,
  Image,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import pages from '../../pages';
import OnBoardingItem from '../component/OnBoardingItem';
import Paginator from '../component/Paginator';

const OnBoardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 3}}>
        <FlatList
          data={pages}
          keyExtractor={item => item.id}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={pages} scrollX={scrollX} />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
