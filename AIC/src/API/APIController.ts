import Config from "react-native-config";
export default class APIController {
    static instance : APIController;

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
    //https://api.artic.edu/api/v1/exhibitions/4568?fields=id,title,image_id,alt_image_ids
    public async getArtworkByID(id: Number) {
      if(!id) return ;
      const options = {

      }
      // Filter to reduce network traffic and data consumption
      const filter = '?fields=id,pagination,config,short_description,alt_text,title,image_id,alt_image_ids,api_link,date_display,artist_display,place_of_origin,description,dimensions,medium_display,credit_line,artist_title,category_titles,thumbnail'
      const url = `${Config.API_URL}${id}${filter}`
       fetch(url, options).then(async (response) => {
        if (response.ok) {
         const json = await response.json();
        // console.log(json.data)
        }else{
          console.log("NOOO")
        }
       })
      
    }

    //https://api.artic.edu/api/v1/artworks?page=2&limit=100
    public async getArtworkPaginated(requestedPage: Number, amount: Number){
      const filter = '&fields=id,main_reference_number,title,short_description,alt_text,image_id,alt_image_ids,api_link,date_display,artist_display,place_of_origin,description,dimensions,medium_display,credit_line,artist_title,category_titles,thumbnail'
      const url = `${Config.API_URL}?page=${requestedPage}&limit=${amount}${filter}`;
      const options = {}
      const response = await fetch(url, options);
      if (response.ok) {
        const json = await response.json();
        return json;
      }else{
        console.log("Error")
        return undefined;
      }
    }

  
  }