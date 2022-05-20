
import React from 'react'
import { BottomNavigation, Title } from 'react-native-paper'
import CardsComponent from '../components/CardsComponent'
import HistoryScreen from './HistoryScreen'
import TrackScreen from './TrackScreen'
import AccountScreen from './AccountScreen'


const HomeScreenRoute       = () => <><Title>Home</Title><CardsComponent/></>
const HistoryScreenRoute    = () => <HistoryScreen />
const TrackScreenRoute      = () => <TrackScreen />
const AccountScreenRoute    = () => <AccountScreen />

const HomeScreen = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      
      { key: 'home', title: 'Accueil', icon: 'home' },
      { key: 'logs', title: 'Activités', icon: 'history' },
      { key: 'track', title: 'Ajouter', icon: 'alarm-plus' },
      { key: 'user', title: 'Compte', icon: 'account-cog' }
    ]);
  
    const renderScene = BottomNavigation.SceneMap({     
      home: HomeScreenRoute,
      logs: HistoryScreenRoute,
      track: TrackScreenRoute,
      user: AccountScreenRoute,
    });
  

  return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    )
}

export default HomeScreen