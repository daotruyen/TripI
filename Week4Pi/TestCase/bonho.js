{
    state.makers.map((makers, index) => {
      return (
        <Marker key={index}
          coordinate={makers.coordinate}
          onPress={(e) => onMakerPress(e)}>
          <View style={styles.makersWrap}>
            <Image
              source={require('../imgTest/logo.jpg')}
              style={styles.makers}
              resizeMode='cover'
            />
          </View>
        </Marker>
      );
    }
    )
    }