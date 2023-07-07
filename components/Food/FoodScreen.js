import { useSelector, useDispatch } from "react-redux";
import { addFood, deleteFood } from "../../redux/food-action";
import { useState } from "react";
import { Text, View, Button, FlatList, TextInput, SafeAreaView } from "react-native";

function FoodScreen() {
    const [food, setFood] = useState('');

    const foodState = useSelector(state => state.food);
    foodList = foodState.foods;

    const dispatch = useDispatch();


    const handleAddFood = () => {
        if (food == '') {
            return;
        }
        dispatch(addFood(food));
        setFood('');
    }

    const handleDeleteFood = (id) => {
        dispatch(deleteFood(id));
    }

    const onChangeText = (obj) => {
        setFood(obj.nativeEvent.text);
    }

    const Item = ({ item }) => (
        <View style={{ alignItems: "center", marginVertical: 5 }}>
            <Text style={{ color: "black", fontSize: 20 }}>
                {item.food}
                <Button title="Delete" onPress={() => handleDeleteFood(item.id)} />
            </Text>

        </View>
    );

    return (
        <SafeAreaView>
            <View >
                <Text style={{ fontWeight: "bold", marginBottom: 10, textAlign: "center", fontSize: 18 }}>Food Management</Text>

                <FlatList
                    data={foodList}
                    key={item => item.id}
                    maximumZoomScale={299}
                    renderItem={(item) =>
                        <Item item={item.item} />} />

                <TextInput value={food} onChange={onChangeText} style={{ color: "black", height: 30, marginHorizontal: 90, marginTop: 20, borderRadius: 8, borderColor: "black", borderStyle: "solid", borderWidth: 2 }} keyboardType="default" keyboardAppearance="light" />

                <Button title="Add" onPress={handleAddFood} />
            </View>
        </SafeAreaView>
    )
}

export default FoodScreen;