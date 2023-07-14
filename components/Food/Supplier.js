import { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addSupplier, deleteSupplier } from "../../redux/supplier/supplier-action";
import { TextInput } from "react-native";
import { Button } from "react-native";

function Supplier() {
    const [supplier, setSupplier] = useState('');
    const dispatch = useDispatch();

    const supplierState = useSelector(state => state.supplier);
    let supplierList = supplierState.suppliers;

    const onChangeText = obj => {
        setSupplier(obj.nativeEvent.text);
    }

    const handleAddSupplier = () => {
        if (supplier == '') {
            return;
        }
        dispatch(addSupplier(supplier))
        setSupplier('');
    }

    const handleDeleteSupplier = (id) => {
        dispatch(deleteSupplier(id));
    }

    const Item = ({ item }) => (
        <View style={{ alignItems: "center", marginVertical: 5 }}>
            <Text style={{ color: "black", fontSize: 20 }}>
                {item.supplier}
                <Button title="Delete" onPress={() => handleDeleteSupplier(item.id)} />
            </Text>

        </View>
    );

    return (
        <SafeAreaView>
            <View >
                <Text style={{ fontWeight: "bold", marginBottom: 10, textAlign: "center", fontSize: 18, marginTop: 20 }}>Supplier</Text>

                <FlatList
                    data={supplierList}
                    key={item => item.id}
                    maximumZoomScale={299}
                    renderItem={(item) =>
                        <Item item={item.item} />} />

                <TextInput placeholder="Please enter the supplier!" value={supplier} onChange={onChangeText} style={{ color: "black", height: 40, textAlign: "center", marginHorizontal: 90, marginTop: 20, borderRadius: 8, borderColor: "black", borderStyle: "solid", borderWidth: 2 }} keyboardType="default" keyboardAppearance="light" />

                <Button title="Add" onPress={handleAddSupplier} />
            </View>
        </SafeAreaView>
    )
}

export default Supplier;