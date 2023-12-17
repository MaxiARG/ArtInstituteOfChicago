import Config from "react-native-config";
import { getStorageItems } from "./StorageController";
import { PaginatedInfo } from "../types/types";

export default class APIController {
  static instance: APIController;

  constructor() {
    if (APIController.instance) {
      return APIController.instance;
    }
    APIController.instance = this;
    return this;
  }
  static getInstance() {
    if (!APIController.instance) {
      APIController.instance = new APIController();
    }
    return APIController.instance;
  }
  //https://api.artic.edu/api/v1/artworks/75644?fields=id,title,image_id,alt_image_ids
  //https://api.artic.edu/api/v1/artworks?page=2&limit=100
  public async getArtworkPaginated(requestedPage: Number, amount: Number) {
    const filter = '&fields=id,main_reference_number,title,short_description,alt_text,image_id,alt_image_ids,api_link,date_display,artist_display,place_of_origin,description,dimensions,medium_display,credit_line,artist_title,category_titles,thumbnail'
    const url = `${Config.API_URL}?page=${requestedPage}&limit=${amount}${filter}`;
    const options = {}
    const response = await fetch(url, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      console.log("Error")
      return undefined;
    }
  }

  public async getArtworkFromStorage() {
    const filter = '?fields=id,main_reference_number,title,short_description,alt_text,image_id,alt_image_ids,api_link,date_display,artist_display,place_of_origin,description,dimensions,medium_display,credit_line,artist_title,category_titles,thumbnail'
    let items: String[] = getStorageItems();
    let dataFetched: PaginatedInfo[] = [];
    if (items && items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i] && items[i].length > 0) {//un foreach no va con metodos async dentro. Por eso un for comun.
          let url: String = items[i];
          let urlFinal = url + filter;
          const response = await fetch(urlFinal);
          if (response.ok) {
            let finalData = await response.json();
            dataFetched.push(finalData.data);
          }

        }
      }
    }
    return dataFetched;
  }


}