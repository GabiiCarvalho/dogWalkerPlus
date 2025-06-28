import { View, Text, FlatList } from 'react-native';

const walkers = [
    { id: '1', name: 'Ana Silva', rating: 4.9 },
    { id: '2', name: 'Carlos Souza', rating: 4.7 },
];

export default function TutorHome() {
    return (
        <View>
            <Text>Encontre seu passeador:</Text>
            <FlatList
            data={walkers}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.name}</Text>
                    <Text>⭐ {item.rating}</Text>
                </View>
            )}
            />
        </View>
    );
}