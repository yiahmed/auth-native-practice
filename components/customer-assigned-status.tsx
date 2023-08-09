import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useStatusStyles from "./use-avatar-colors";

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

interface CustomerAssignedStatusProps {
  customer: Customer;
  isLoading: boolean;
}

const STATUS_STYLES = {
  Unresolved: {
    backgroundColor: "#FEE2E2",
    color: "#bc243f",
  },
  Pending: {
    backgroundColor: "yellow",
    color: "white",
  },
  "High Priority": {
    backgroundColor: "#F04444",
    color: "white",
  },
  Resolved: {
    backgroundColor: "green",
    color: "white",
  },
};

const getCustomerStatus = (customer: Customer) => {
  if (customer.tags) {
    const validTags = ["Unresolved", "Pending", "High Priority", "Resolved"];
    const tagNames = customer.tags.map((tag) => tag.name);
    const matchingTags = tagNames.filter((name) => validTags.includes(name));
    if (matchingTags.length > 0) {
      return matchingTags[0];
    }
  }
  return undefined;
};

const CustomerAssignedStatus = ({
  customer,
  isLoading,
}: CustomerAssignedStatusProps) => {
  const currentStatusName = getCustomerStatus(customer);
  const statusStyle =
    STATUS_STYLES[currentStatusName as keyof typeof STATUS_STYLES] || {};

  return (
    <>
      {currentStatusName && (
        <View
          style={[
            styles.statusContainer,
            statusStyle,
            { backgroundColor: statusStyle.backgroundColor || "transparent" },
          ]}
        >
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: statusStyle.color || "transparent" },
            ]}
          />
          <Text style={styles.statusText}>{currentStatusName}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 9999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: -0.5,
    marginTop: -0.5,
    marginRight: 3,
    height: 24,
  },
  animatePulse: {
    backgroundColor: "slategray", // You can adjust the color here
  },
  iconCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});

export default CustomerAssignedStatus;
