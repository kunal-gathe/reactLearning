export function setFunc(restaurant, searchText) {
    return restaurant?.filter((restaurant) => {
      return restaurant?.info?.name
        .toLowerCase()
        ?.includes(searchText.toLowerCase());
    });
  }