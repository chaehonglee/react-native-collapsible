import {
  CollapsibleFlatList,
  CollapsibleHeaderContainer,
  StickyView,
} from '@r0b0t3d/react-native-collapsible';
import React, { useCallback, useMemo } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {};

export default function Top100Tab({}: Props) {
  const data = useMemo(() => [...Array(20).keys()].map((id) => ({ id })), []);

  const renderItem = useCallback(({ index }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.order}>{index + 1}</Text>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkjvh77-uqnvGnus_qPaNM2yxwdH2ITNCVQ&usqp=CAU',
          }}
          style={styles.songCover}
        />
        <Text style={styles.songName}>{'On My Way'}</Text>
      </View>
    );
  }, []);

  return (
    <>
      <CollapsibleHeaderContainer>
        <StickyView>
          <View style={styles.searchBox}>
            <TextInput placeholder="Looking for..." style={styles.search} />
          </View>
        </StickyView>
      </CollapsibleHeaderContainer>
      <CollapsibleFlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{ marginTop: 10 }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 0,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchBox: {
    marginHorizontal: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  search: {
    fontSize: 14,
  },
  songCover: {
    width: 60,
    aspectRatio: 1,
  },
  songName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  order: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 15,
    width: 20,
  },
});
