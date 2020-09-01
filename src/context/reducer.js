export default function reducer(state, action) {
  switch (action.type) {
    case 'GET_SHIPMENTS':
      return {
        ...state,
        shipments: action.payload.shipments,
      };
    case 'SORT_SHIPMENTS':
      return {
        ...state,
        shipments: action.payload,
      };
    case 'SEARCH_SHIPMENTS':
      const searchResult = state.shipments.filter(
        (t) => t.id === action.payload && t
      );

      return {
        ...state,
        shipments: searchResult,
      };
    default:
      return state;
  }
}
