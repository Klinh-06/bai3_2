import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    type: "task",
    title: "Bước 1 Xác định nhu cầu khách hàng",
    description: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    date: "20/08/2020, 06:00",
    highlight: true
  },
  {
    id: "2",
    type: "customer",
    title: "Bạn có khách hàng mới!",
    description:
      "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    date: "20/08/2020, 06:00"
  },
  {
    id: "3",
    type: "customer",
    title: "Khách hàng được chia sẻ bị trùng",
    description:
      "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
    date: "20/08/2020, 06:00"
  },
  {
    id: "4",
    type: "customer",
    title: "Khách hàng được thêm bị trùng",
    description:
      "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
    date: "20/08/2020, 06:00"
  },
  {
    id: "5",
    type: "task",
    title: "Công việc sắp đến hạn trong hôm nay",
    description:
      "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    date: "20/08/2020, 06:00"
  },
  {
    id: "6",
    type: "task",
    title: "Công việc đã quá hạn",
    description:
      "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
    date: "20/08/2020, 06:00"
  }
];

const NotificationItem = ({ item }) => {
  const iconName =
    item.type === "task" ? "checkmark-circle" : "people";

  return (
    <View
      style={[
        styles.card,
        item.highlight && styles.highlightCard
      ]}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={28} color="#3f51b5" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <NotificationItem item={item} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 16,
    backgroundColor: "#fff"
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  highlightCard: {
    backgroundColor: "#e8edf9"
  },
  iconContainer: {
    marginRight: 12,
    justifyContent: "flex-start",
    paddingTop: 4
  },
  content: {
    flex: 1
  },
  title: {
    fontWeight: "bold",
    fontSize: 15
  },
  description: {
    marginTop: 4,
    color: "#555"
  },
  date: {
    marginTop: 6,
    fontSize: 12,
    color: "#999"
  }
});
