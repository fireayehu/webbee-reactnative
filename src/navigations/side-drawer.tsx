import { createDrawerNavigator } from '@react-navigation/drawer';
import { Screens } from '@shared/constants/screen-name';
import { useCategories } from '@hooks/category';
import { CategoryStack } from './category-stack';
import { DashboardStack } from './dashboard-stack';
import { ManageStack } from './manage-stack';

const Drawer = createDrawerNavigator();

export const SideDrawer = () => {
  const { categories } = useCategories();
  return (
    <Drawer.Navigator initialRouteName={Screens.DASHBOARD_STACK}>
      <Drawer.Screen
        name={Screens.DASHBOARD_STACK}
        component={DashboardStack}
        options={{ drawerLabel: 'Dashboard', headerTitle: 'Dashboard' }}
      />
      {categories.map(category => (
        <Drawer.Screen
          key={category.id}
          name={`${Screens.CATEGORY_STACK}-${category.id}`}
          component={CategoryStack}
          initialParams={{ id: category.id }}
          options={{
            drawerLabel: category.name || 'Unnamed Category',
            headerTitle: category.name || 'Unnamed Category',
          }}
        />
      ))}

      <Drawer.Screen
        name={Screens.MANAGE_STACK}
        component={ManageStack}
        options={{
          drawerLabel: 'Manage Categories',
          headerTitle: 'Manage Categories',
        }}
      />
    </Drawer.Navigator>
  );
};
