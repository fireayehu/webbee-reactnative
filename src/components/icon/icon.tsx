import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { IIconProps } from './type';

export const Icon: React.FC<IIconProps> = ({ type, size = 24, ...props }) => {
  switch (type) {
    case 'AntDesign':
      return <AntDesign size={size} {...props} />;
    case 'Entypo':
      return <Entypo size={size} {...props} />;
    case 'EvilIcons':
      return <EvilIcons size={size} {...props} />;
    case 'Feather':
      return <Feather size={size} {...props} />;
    case 'FontAwesome':
      return <FontAwesome size={size} {...props} />;
    case 'Fontisto':
      return <Fontisto size={size} {...props} />;
    case 'Foundation':
      return <Foundation size={size} {...props} />;
    case 'Ionicons':
      return <Ionicons size={size} {...props} />;
    case 'MaterialIcons':
      return <MaterialIcons size={size} {...props} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons size={size} {...props} />;
    case 'Octicons':
      return <Octicons size={size} {...props} />;
    case 'Zocial':
      return <Zocial size={size} {...props} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons size={size} {...props} />;
    default:
      return <AntDesign size={size} {...props} />;
  }
};

export * from './type';
