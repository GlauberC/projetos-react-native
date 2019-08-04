import {HomeScr, ProfileScr, SettingsScr} from './screens/screens'
import {createAppContainer, createDrawerNavigator} from 'react-navigation'

const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeScr,
        Profile: ProfileScr,
        Settings: SettingsScr
    },
    {
        contentOptions:{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            labelStyle:{
                fontSize: 20
            }
        }
    }
)
export default createAppContainer(DrawerNavigator)