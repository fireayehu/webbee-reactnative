import React, { useCallback } from 'react';
import { useCategories } from 'hooks/category';
import { FlatList } from 'react-native-gesture-handler';
import { useStyles } from './styles';
import { DashboardItem } from 'components/dashboard-item';
import { Button, Text } from 'react-native-paper';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Screens } from 'shared/constants/screen-name';

export const Dashboard = () => {
  const styles = useStyles();
  const navigation = useNavigation<any>();
  const { categories } = useCategories();

  const renderItem = useCallback(({ item }: any) => {
    return <DashboardItem category={item} />;
  }, []);

  const EmptyList = () => {
    return (
      <View style={styles.emptyList}>
        <Text>No Categories Found</Text>
        <Button
          mode="contained"
          uppercase
          style={styles.button}
          onPress={() => navigation.navigate(Screens.MANAGE_STACK)}>
          Add a Category
        </Button>
      </View>
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={EmptyList}
      contentContainerStyle={styles.contentContainer}
    />
  );
};
