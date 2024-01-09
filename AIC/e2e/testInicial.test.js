describe('Detox Corre bien', () => {

    beforeAll(async () => {
        await device.launchApp();
      });

      beforeEach(async () => {
        //await device.launchApp({ newInstance: true });
        await device.reloadReactNative();
      });
  
    it('Muestra Welcome', async () => {
        let titulo = await element(by.id('WelcomeTitle')); 
        
         expect(titulo).toBeVisible();
       // await expect(titulo).toHaveText('Welcome');
    });
  });