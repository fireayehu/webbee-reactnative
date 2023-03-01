import { createDrawerNavigator } from '@react-navigation/drawer';
import { Screens } from '@shared/constants/screen-name';
import { CategoryStack } from './category-stack';
import { DashboardStack } from './dashboard-stack';
import { ManageStack } from './manage-stack';

const Drawer = createDrawerNavigator();

export const SideDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={Screens.DASHBOARD_STACK}>
      <Drawer.Screen
        name={Screens.DASHBOARD_STACK}
        component={DashboardStack}
        options={{ drawerLabel: 'Dashboard', headerTitle: 'Dashboard' }}
      />
      {[1, 2, 3, 4].map(i => (
        <Drawer.Screen
          key={i}
          name={`${Screens.CATEGORY_STACK}-${i}`}
          component={CategoryStack}
          options={{
            drawerLabel: `Category-${i}`,
            headerTitle: `Category-${i}`,
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
