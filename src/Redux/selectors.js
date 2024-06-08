export const selectGetCamperList = (state) => state.camperData.campers.data;

export const selectIsLoading = (state) => state.camperData.isLoading;

export const selectShowedVans = (state) => state.camperData.showedVans;

export const selectCampersCount = (state) =>
  state.camperData.campers.campersCount;


export const selectPromoImages = (state) => state.camperData.campers.promoImages