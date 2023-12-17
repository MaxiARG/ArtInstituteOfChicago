import { MMKV } from 'react-native-mmkv'

const Storage = new MMKV()

export const getStorageItems = (): String[] => {
  let favs = Storage.getString('favs');
  if (favs) {
    let data: { links: String[] } = JSON.parse(favs);
    return data.links;
  }
  return [];
}

export const getStorageItemsSize = (): Number => {
  let favs = Storage.getString('favs');
  if (favs) {
    let obj: { links: String[] } = JSON.parse(favs);
    return obj.links.length;
  }
  return 0;
}
//Could've been better to store id instead of api_link, since it would be less CPU intensive to compare Numbers instead of Strings
export const storeNewFavorite = (api_link: String) => {
  if (!api_link || api_link.length <= 0) return { result: 'Link could not be empty' };

  try {

    let favs = Storage.getString('favs');
    if (!favs) {
      let newFav = { links: [] }
      Storage.set('favs', JSON.stringify(newFav));
    }
    favs = Storage.getString('favs');
    if (favs) {
      let data = JSON.parse(favs);
      let favsVec: String[] = data.links;
      const hit = favsVec.filter((item) => { return item === api_link })

      if (hit && hit.length >= 1) {
        return { result: 'Artwork already in favorites' };
      } else {
        let vec: { links: String[] } = JSON.parse(favs);
        vec.links.push(api_link);
        Storage.set('favs', JSON.stringify(vec));
        return { result: 'Artwork saved to favorites' }
      }

    }
  } catch (e) {
    console.log("Error")
    return { result: "Error" }
  }
  console.log("Nunca llega aca")
  return { result: "Won't reach this point" }
}

export const itemExistsInFavs = (api_link: String): boolean => {
  let favs = Storage.getString('favs');
  let hits: String[];
  if (favs) {
    let data: { links: String[] } = JSON.parse(favs);
    hits = data.links.filter((item) => {
      return item === api_link
    });
    if (hits && hits.length >= 1) {
      return true;
    } else {
      return false;
    }
    // could have been returned hits && hits.length >= 0
  }
  return false;
}

export const clearStorage = () => {
  Storage.clearAll();
}

export const deleteItemFromStorage = (api_link: String) => {
  let favs = Storage.getString('favs');
  if (favs) {
    let data: { links: String[] } = JSON.parse(favs);
    let vec = data.links;
    let filtrado = vec.filter((item) => {
      return item !== api_link
    })
    Storage.clearAll();
    Storage.set('favs', JSON.stringify({ links: filtrado }));
  }
}