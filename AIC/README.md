# Extracto API
React native app. It utilizes the API provided by the Art Institute of Chicago
Image Structure:
It is build in 3 parts:

https://www.artic.edu/iiif/2/{identifier}/{region}/{size}/{rotation}/{quality}.{format}
https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg

iiif_url + image_id + /full/843,/0/default.jpg

full image at different sizes:

https://www.artic.edu/iiif/2/{identifier}/full/200,/0/default.jpg
https://www.artic.edu/iiif/2/{identifier}/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/{identifier}/full/600,/0/default.jpg
https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg



example:
<Image
        style={{    width: 250,
            height: 120,}}
        source={{
          uri: 'https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/843,/0/default.jpg',
        }}
      />

Paginacion:
Listing and search endpoints are paginated. We show 12 records per page by default. Pagination can be controlled via the following query parameters:

page to request a specific page of results (1-based, default: 1)
limit to set how many records each page should return (0-based, default: 12)
Example: https://api.artic.edu/api/v1/artists?page=2&limit=10



https://api.artic.edu/api/v1/artworks

artwork particular: https://api.artic.edu/api/v1/artworks/129884


Videos?  https://api.artic.edu/api/v1/videos?limit=2
https://www.artic.edu/iiif/2/fae3fdc2-7a52-5fc4-c634-c2033f9b2a46/full/200,/0/default.mp4



# Requerimientos objetivo:

1) We want to build a mobile application that allows a user to navigate the catalog of artworks exposed by the Art Institute of Chicago API.

2) The user should be able to see a thumbnail and a small description of each artwork in the main screen of the app

3) When clicking on a thumbnail the user must be sent to a detailed screen of the artwork containing a better quality image and more detailed information about the  piece, the author, and any other data you consider might be relevant for the end user

4) The user should be able to save some favorite artworks, and should be able to explore them even after the application is completely closed and reopened

5) You should use animated transitions and any other cool feature you consider will show up how experienced you are in mobile development

6) Additional bonus if you implement some kind of push notifications.

# Extras

7) Implement a video player?

8) Implement a Splash screen?

9) Create an icon for the APK?

11) Incorporar Icons -> Incorporado

12) Desarrollo de componentes reutilizables -> Incorporado

13) Agregar animacion de skeleton para los ArtworkItems cuando se estan cargando

14) Se utiliza archivo .env




