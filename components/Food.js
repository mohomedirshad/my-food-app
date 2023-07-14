import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoodScreen from "./Food/FoodScreen";
import { Ionicons } from "@expo/vector-icons";
import Supplier from "./Food/Supplier";

const Tabs = createBottomTabNavigator();

function Food() {
    return (
        <Tabs.Navigator screenOptions={({ route, }) => ({
            tabBarItemStyle:{
                margin: 8,
            },
            tabBarIconStyle:{
                marginTop: -8
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: 'gray',
            tabBarStyle:{
                display: "flex"
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'FoodScreen') {
                    iconName = focused ? 'ios-list-outline' : 'ios-list';
                } else if (route.name === 'Supplier') {
                    iconName = focused ? 'ios-list-outline' : 'ios-list';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            }
        })}
        >
            <Tabs.Screen name="FoodScreen" component={FoodScreen} options={{ title: "Food", headerShown: false }} />
            <Tabs.Screen name="Supplier" component={Supplier} options={{ headerShown: false }} />

        </Tabs.Navigator>
    )
}

export default Food;