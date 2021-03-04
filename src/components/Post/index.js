import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui beatae
        accusamus, ratione neque cum aspernatur earum dolore fuga explicabo
        veritatis, tenetur enim temporibus aut ea ducimus sequi dolorum ex nisi.
      </Text>

      {/* Prices - Old  & New */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.price}> $30</Text> / night
      </Text>

      {/* Total Price */}
      <Text style={styles.totlePrice}>$247 totle</Text>
    </View>
  );
};

export default Post;
