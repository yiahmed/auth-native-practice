import React, { useState } from "react";
import Swipeable from "react-native-swipeable";
import { Text, TouchableHighlight, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import useAvatarColors from "./use-avatar-colors";
import CustomerAssignedStatus from "./customer-assigned-status";

interface Tag {
  tag_id: number;
  store_id: number | null;
  name: string;
  normalized: string;
  created_at: string;
  updated_at: string;
  pivot: {
    taggable_id: number;
    tag_id: number;
    taggable_type: string;
    created_at: string;
    updated_at: string;
  };
}

interface CurrentAssignment {
  id: number;
  store_id: number;
  urgency: string | null;
  status: string | null;
  created_at: string;
  updated_at: string;
  user_id: number;
  customer_store_id: number;
  action_taken: string | null;
  employee_id: number | null;
  assignable_type: string | null;
  assignable_id: number | null;
  assigner_id: number;
  user: {
    id: number;
  };
}

interface Customer {
  id: number;
  full_name: string;
  first_name: string;
  last_name: string;
  most_recent_message_body: string;
  customer_id: number;
  tags: Tag[];
  recent_activity_at: string;
  current_assignment: CurrentAssignment | null;
  email: string | null;
  mobile: string;
  avg_spend_per_visit_for_store_range: number;
}

interface SwipeListItemProps {
  customer: Customer;
}

const customers: Customer[] = [
  {
    id: 76572,
    full_name: "Andrew Carrigan",
    first_name: "Andrew",
    last_name: "Carrigan",
    most_recent_message_body:
      "Incoming call from +14136722507 : Andrew Carrigan",
    customer_id: 12304,
    tags: [
      {
        tag_id: 1,
        store_id: null,
        name: "Unresolved",
        normalized: "unresolved",
        created_at: "2020-11-19T02:18:41.000000Z",
        updated_at: "2020-11-19T02:18:41.000000Z",
        pivot: {
          taggable_id: 76572,
          tag_id: 1,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-05-31T21:01:39.000000Z",
          updated_at: "2023-05-31T21:01:39.000000Z",
        },
      },
      {
        tag_id: 25,
        store_id: null,
        name: "High Priority",
        normalized: "high priority",
        created_at: "2022-02-02T12:47:26.000000Z",
        updated_at: "2022-02-02T12:47:26.000000Z",
        pivot: {
          taggable_id: 76572,
          tag_id: 25,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-05-31T17:21:01.000000Z",
          updated_at: "2023-05-31T17:21:01.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-28T18:24:07.000000Z",
    current_assignment: {
      id: 116,
      store_id: 12,
      urgency: null,
      status: null,
      created_at: "2023-06-20T22:02:05.000000Z",
      updated_at: "2023-06-20T22:02:05.000000Z",
      user_id: 30,
      customer_store_id: 76572,
      action_taken: null,
      employee_id: null,
      assignable_type: null,
      assignable_id: null,
      assigner_id: 30,
      user: {
        id: 30,
      },
    },
    email: "andrew@ripemetrics.com",
    mobile: "+14136722507",
    avg_spend_per_visit_for_store_range: 100,
  },
  {
    id: 78444,
    full_name: "Nic Last",
    first_name: "Nic",
    last_name: "Last",
    most_recent_message_body: "Incoming call from +16197721369 : Nic Last",
    customer_id: 78435,
    tags: [
      {
        tag_id: 1,
        store_id: null,
        name: "Unresolved",
        normalized: "unresolved",
        created_at: "2020-11-19T02:18:41.000000Z",
        updated_at: "2020-11-19T02:18:41.000000Z",
        pivot: {
          taggable_id: 78444,
          tag_id: 1,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-07-19T20:00:55.000000Z",
          updated_at: "2023-07-19T20:00:55.000000Z",
        },
      },
      {
        tag_id: 25,
        store_id: null,
        name: "High Priority",
        normalized: "high priority",
        created_at: "2022-02-02T12:47:26.000000Z",
        updated_at: "2022-02-02T12:47:26.000000Z",
        pivot: {
          taggable_id: 78444,
          tag_id: 25,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-07-19T19:57:01.000000Z",
          updated_at: "2023-07-19T19:57:01.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-26T21:31:43.000000Z",
    current_assignment: null,
    email: "nic@ripemetrics.com",
    mobile: "+16197721369",
    avg_spend_per_visit_for_store_range: 20,
  },
  {
    id: 78688,
    full_name: "Goran Cvetic",
    first_name: "Goran",
    last_name: "Cvetic",
    most_recent_message_body: "Incoming call from +15179272770 : Goran Cvetic",
    customer_id: 78676,
    tags: [
      {
        tag_id: 1,
        store_id: null,
        name: "Unresolved",
        normalized: "unresolved",
        created_at: "2020-11-19T02:18:41.000000Z",
        updated_at: "2020-11-19T02:18:41.000000Z",
        pivot: {
          taggable_id: 78688,
          tag_id: 1,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-05-25T22:40:39.000000Z",
          updated_at: "2023-05-25T22:40:39.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-26T21:31:25.000000Z",
    current_assignment: {
      id: 113,
      store_id: 12,
      urgency: null,
      status: null,
      created_at: "2023-06-02T22:32:15.000000Z",
      updated_at: "2023-06-02T22:32:15.000000Z",
      user_id: 35,
      customer_store_id: 78688,
      action_taken: null,
      employee_id: null,
      assignable_type: null,
      assignable_id: null,
      assigner_id: 35,
      user: {
        id: 35,
      },
    },
    email: "g.cvetic23@gmail.com",
    mobile: "+15179272770",
    avg_spend_per_visit_for_store_range: 60,
  },
  {
    id: 78832,
    full_name: "+16198000219",
    first_name: null,
    last_name: null,
    most_recent_message_body: "Incoming call from +16198000219 : +16198000219",
    customer_id: null,
    tags: [
      {
        tag_id: 1,
        store_id: null,
        name: "Unresolved",
        normalized: "unresolved",
        created_at: "2020-11-19T02:18:41.000000Z",
        updated_at: "2020-11-19T02:18:41.000000Z",
        pivot: {
          taggable_id: 78832,
          tag_id: 1,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-07-25T18:41:34.000000Z",
          updated_at: "2023-07-25T18:41:34.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-25T19:27:16.000000Z",
    current_assignment: null,
    email: null,
    mobile: "+16198000219",
    avg_spend_per_visit_for_store_range: 0,
  },
  {
    id: 78783,
    full_name: "+16195123739",
    first_name: null,
    last_name: null,
    most_recent_message_body: "This looks amazing!",
    customer_id: 79065,
    tags: [
      {
        tag_id: 1,
        store_id: null,
        name: "Unresolved",
        normalized: "unresolved",
        created_at: "2020-11-19T02:18:41.000000Z",
        updated_at: "2020-11-19T02:18:41.000000Z",
        pivot: {
          taggable_id: 78783,
          tag_id: 1,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-07-13T19:44:31.000000Z",
          updated_at: "2023-07-13T19:44:31.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-24T22:40:52.000000Z",
    current_assignment: null,
    email: null,
    mobile: "+16195123739",
    avg_spend_per_visit_for_store_range: 0,
  },
  {
    id: 78750,
    full_name: "Chelsea Crowe",
    first_name: "Chelsea",
    last_name: "Crowe",
    most_recent_message_body: "Message is spelt wrong",
    customer_id: 78735,
    tags: [
      {
        tag_id: 1,
        store_id: null,
        name: "Unresolved",
        normalized: "unresolved",
        created_at: "2020-11-19T02:18:41.000000Z",
        updated_at: "2020-11-19T02:18:41.000000Z",
        pivot: {
          taggable_id: 78750,
          tag_id: 1,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-07-09T17:46:30.000000Z",
          updated_at: "2023-07-09T17:46:30.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-24T21:02:39.000000Z",
    current_assignment: null,
    email: "chezzabelle212@gmail.com",
    mobile: "+13474632661",
    avg_spend_per_visit_for_store_range: 20,
  },
  {
    id: 78690,
    full_name: "AC Slater",
    first_name: "AC",
    last_name: "Slater",
    most_recent_message_body: "Incoming call from +18587549287 : AC Slater",
    customer_id: 78678,
    tags: [
      {
        tag_id: 1,
        store_id: null,
        name: "Unresolved",
        normalized: "unresolved",
        created_at: "2020-11-19T02:18:41.000000Z",
        updated_at: "2020-11-19T02:18:41.000000Z",
        pivot: {
          taggable_id: 78690,
          tag_id: 1,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-07-09T17:48:14.000000Z",
          updated_at: "2023-07-09T17:48:14.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-21T04:35:29.000000Z",
    current_assignment: null,
    email: "tpat0222@gmail.com",
    mobile: "+18587549287",
    avg_spend_per_visit_for_store_range: 20,
  },
  {
    id: 76560,
    full_name: "Drew Kroft",
    first_name: "Drew",
    last_name: "Kroft",
    most_recent_message_body: "Incoming call from +16198826261 : Drew Kroft",
    customer_id: 19983,
    tags: [
      {
        tag_id: 1,
        store_id: null,
        name: "Unresolved",
        normalized: "unresolved",
        created_at: "2020-11-19T02:18:41.000000Z",
        updated_at: "2020-11-19T02:18:41.000000Z",
        pivot: {
          taggable_id: 76560,
          tag_id: 1,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-05-26T04:48:56.000000Z",
          updated_at: "2023-05-26T04:48:56.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-20T00:53:23.000000Z",
    current_assignment: {
      id: 106,
      store_id: 12,
      urgency: null,
      status: null,
      created_at: "2023-06-02T22:08:11.000000Z",
      updated_at: "2023-06-02T22:08:11.000000Z",
      user_id: 30,
      customer_store_id: 76560,
      action_taken: null,
      employee_id: null,
      assignable_type: null,
      assignable_id: null,
      assigner_id: 25,
      user: {
        id: 30,
      },
    },
    email: "drew@ripemetrics.com",
    mobile: "+16198826261",
    avg_spend_per_visit_for_store_range: 100,
  },
  {
    id: 76568,
    full_name: "Chris Boudreau",
    first_name: "Chris",
    last_name: "Boudreau",
    most_recent_message_body:
      "Incoming call from +18587365393 : Chris Boudreau",
    customer_id: 19985,
    tags: [
      {
        tag_id: 1,
        store_id: null,
        name: "Unresolved",
        normalized: "unresolved",
        created_at: "2020-11-19T02:18:41.000000Z",
        updated_at: "2020-11-19T02:18:41.000000Z",
        pivot: {
          taggable_id: 76568,
          tag_id: 1,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-06-09T00:55:17.000000Z",
          updated_at: "2023-06-09T00:55:17.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-11T01:05:58.000000Z",
    current_assignment: {
      id: 115,
      store_id: 12,
      urgency: null,
      status: null,
      created_at: "2023-06-20T22:01:41.000000Z",
      updated_at: "2023-06-20T22:01:41.000000Z",
      user_id: 30,
      customer_store_id: 76568,
      action_taken: null,
      employee_id: null,
      assignable_type: null,
      assignable_id: null,
      assigner_id: 30,
      user: {
        id: 30,
      },
    },
    email: "chris@ripemetrics.com",
    mobile: "+18587365393",
    avg_spend_per_visit_for_store_range: 80,
  },
  {
    id: 78754,
    full_name: "+16198826261",
    first_name: null,
    last_name: null,
    most_recent_message_body: "Incoming call from +16198826261 : +16198826261",
    customer_id: 78756,
    tags: [
      {
        tag_id: 1,
        store_id: null,
        name: "Unresolved",
        normalized: "unresolved",
        created_at: "2020-11-19T02:18:41.000000Z",
        updated_at: "2020-11-19T02:18:41.000000Z",
        pivot: {
          taggable_id: 78754,
          tag_id: 1,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-04-15T04:16:47.000000Z",
          updated_at: "2023-04-15T04:16:47.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-09T02:12:00.000000Z",
    current_assignment: {
      id: 105,
      store_id: 12,
      urgency: null,
      status: null,
      created_at: "2023-06-02T22:08:08.000000Z",
      updated_at: "2023-06-02T22:08:08.000000Z",
      user_id: 11,
      customer_store_id: 78754,
      action_taken: null,
      employee_id: null,
      assignable_type: null,
      assignable_id: null,
      assigner_id: 25,
      user: {
        id: 11,
      },
    },
    email: null,
    mobile: "+16198826261",
    avg_spend_per_visit_for_store_range: 0,
  },
  {
    id: 78815,
    full_name: "no-reply@sendgrid.net",
    first_name: null,
    last_name: null,
    most_recent_message_body: "",
    customer_id: null,
    tags: [],
    recent_activity_at: "2023-07-06T08:03:35.000000Z",
    current_assignment: null,
    email: "no-reply@sendgrid.net",
    mobile: null,
    avg_spend_per_visit_for_store_range: 0,
  },
  {
    id: 78776,
    full_name: "Ken Nguyen",
    first_name: "Ken",
    last_name: "Nguyen",
    most_recent_message_body: "Haha received",
    customer_id: 78966,
    tags: [
      {
        tag_id: 25,
        store_id: null,
        name: "High Priority",
        normalized: "high priority",
        created_at: "2022-02-02T12:47:26.000000Z",
        updated_at: "2022-02-02T12:47:26.000000Z",
        pivot: {
          taggable_id: 78776,
          tag_id: 25,
          taggable_type: "App\\Models\\CustomerStore",
          created_at: "2023-07-19T19:56:34.000000Z",
          updated_at: "2023-07-19T19:56:34.000000Z",
        },
      },
    ],
    recent_activity_at: "2023-07-05T23:40:33.000000Z",
    current_assignment: null,
    email: "kennyboy860@gmail.com",
    mobile: "+17144893922",
    avg_spend_per_visit_for_store_range: 60,
  },
  {
    id: 76564,
    full_name: "Aaron Davis",
    first_name: "Aaron",
    last_name: "Davis",
    most_recent_message_body: "No Message Body to Display",
    customer_id: 19984,
    tags: [],
    recent_activity_at: "2022-06-10T18:01:29.000000Z",
    current_assignment: {
      id: 107,
      store_id: 12,
      urgency: null,
      status: null,
      created_at: "2023-06-02T22:08:14.000000Z",
      updated_at: "2023-06-02T22:08:14.000000Z",
      user_id: 11,
      customer_store_id: 76564,
      action_taken: null,
      employee_id: null,
      assignable_type: null,
      assignable_id: null,
      assigner_id: 25,
      user: {
        id: 11,
      },
    },
    email: "aaron@ripemetrics.com",
    mobile: "+19259673884",
    avg_spend_per_visit_for_store_range: 0,
  },
];

const leftButtons = [
  <TouchableHighlight>
    <Text>Button 1</Text>
  </TouchableHighlight>,
];

const rightButtons = [
  <TouchableHighlight>
    <Text>Button 1</Text>
  </TouchableHighlight>,
  <TouchableHighlight>
    <Text>Button 2</Text>
  </TouchableHighlight>,
];

const Avatar = ({ customer }: SwipeListItemProps) => {
  const avatarColors = useAvatarColors(
    customer.avg_spend_per_visit_for_store_range
  );

  return (
    <View
      style={{
        ...styles.avatarContainer,
        backgroundColor: avatarColors.backgroundColor,
      }}
    >
      <Text style={{ ...styles.avatarText, color: avatarColors.color }}>
        {customer.first_name?.slice(0, 1) ?? ""}
        {customer.last_name?.slice(0, 1) ?? "?"}
      </Text>
    </View>
  );
};

const max_length = 30;
const truncatedText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

function SwipeListItem({ customer }: SwipeListItemProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const backgroundColor = isPressed ? "#FFEED5" : "white";
  const recentActivityDate = new Date(customer.recent_activity_at);
  const dayOfWeek = recentActivityDate.toLocaleString("en-US", {
    weekday: "short",
  });
  const month = recentActivityDate.toLocaleString("en-US", { month: "short" });
  const day = recentActivityDate.getDate();
  const hour = recentActivityDate.getHours();
  const minute = recentActivityDate.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  const formattedHour = hour % 12 || 12;
  const formattedMinute = minute.toString().padStart(2, "0");

  return (
    <Swipeable
      style={{ ...styles.container, backgroundColor }}
      leftButtons={leftButtons}
      rightButtons={rightButtons}
    >
      <TouchableHighlight
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{ flex: 1 }}
        underlayColor="transparent"
      >
        <View style={styles.itemContainer}>
          <View style={styles.content}>
            <View style={styles.test}>
              <Avatar customer={customer} />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>
                {customer.first_name && customer.last_name
                  ? `${customer.first_name} ${customer.last_name}`
                  : customer.mobile
                  ? `${customer.mobile}`
                  : `${customer.email}`}
              </Text>
              <Text style={styles.customerNumberText}>
                {" "}
                {truncatedText(customer.most_recent_message_body, max_length)}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.recentActivityText}>
              {`${month} ${day}, ${formattedHour}:${formattedMinute} ${ampm}`}
            </Text>
            <CustomerAssignedStatus customer={customer} isLoading={isLoading} />
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

function SwipeableList() {
  return (
    <ScrollView>
      {customers.map((customer) => (
        <SwipeListItem key={customer.id} customer={customer} />
      ))}
    </ScrollView>
  );
}

export default SwipeableList;

const styles = StyleSheet.create({
  test: {
    // borderWidth: 3,
    // borderColor: "red",
    width: "14%",
    paddingRight: 30,
  },
  container: {
    backgroundColor: "white",
    borderColor: "#E4E7EB",
    borderWidth: 1,
    height: 120,
    width: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    paddingHorizontal: 12,
    // borderWidth: 1,
    // borderColor: "red",
  },
  content: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  nameContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  nameText: {
    fontSize: 18,
    color: "#3B82F6",
    textDecorationLine: "underline",
  },
  customerNumberText: {
    fontSize: 12,
    color: "gray",
  },
  avatarContainer: {
    position: "relative",
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#3B82F6",
    borderRadius: 9999,
    // borderColor: "red",
    // borderWidth: 3,
  },
  avatarText: {
    fontFamily: "proximaBold",
    fontSize: 14,
    color: "#fff",
    fontWeight: "800",
  },
  recentActivityText: {
    paddingBottom: 5,
  },
});
