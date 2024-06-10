import { createSelector } from "@reduxjs/toolkit";
import Fuse from "fuse.js";

export const selectGetCamperList = (state) => state.camperData.campers.data;

export const selectIsLoading = (state) => state.camperData.isLoading;

export const selectShowedVans = (state) => state.camperData.showedVans;

export const selectFavoritesIDs = (state) => state.camperData.favoritesIDs;

export const selectFilterConditions = (state) => state.camperData.filters;

export const selectCampersCount = (state) =>
  state.camperData.campers.campersCount;

export const selectPromoImages = (state) =>
  state.camperData.campers.promoImages;

export const selectFilteredCampers = createSelector(
  [selectGetCamperList, selectFilterConditions],
  (camperList, filter) => {
    if (!filter) return camperList;

    // console.log(camperList);


    const option = {
      useExtendedSearch: true,
      shouldSort: true,
      threshold: 0,
      keys: [
        "location",
        "kitchen",
        "details.freezer",
        ["details.TV"],
        "details.CD",
        "details.airConditioner",
        "details.radio",
        "details.shower",
        "details.toilet",
        "details.microwave",
        "form",
        "form",
        "form",
      ]
    };

    const fuse = new Fuse(camperList, option);

    const results = fuse.search({ $and: filter });

    console.log("filtered data", results);

    return results.length ? results.map((result) => result.item) : camperList;
  }
);
