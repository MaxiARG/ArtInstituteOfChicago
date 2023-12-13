class APIController {
    static instance = undefined || {};

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

    public static getArtworkByID(id: Number) {}
    public static getArtworkPaginated(page: Number){}
    private static fetch(url: String){}
  
  }