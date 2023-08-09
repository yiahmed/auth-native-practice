const useAvatarColors = (range: number) => {
  if (range > 0 && range < 25) {
    return {
      backgroundColor: "#FFB2B2",
      color: "#FF6347",
    };
  } else if (range >= 25 && range < 50) {
    return {
      backgroundColor: "#FFD699",
      color: "#FFA500",
    };
  } else if (range >= 50 && range < 75) {
    return {
      backgroundColor: "#FFFA99",
      color: "#FFD700",
    };
  } else if (range >= 75) {
    return {
      backgroundColor: "#C1FFC1",
      color: "#008000",
    };
  } else {
    return {
      backgroundColor: "#B0E0E6",
      color: "#00BFFF",
    };
  }
};

export default useAvatarColors;
