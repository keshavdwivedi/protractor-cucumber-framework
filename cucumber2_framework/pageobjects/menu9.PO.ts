import { ElementFinder, element, by } from "protractor";

export class homepageclass{
    
    EXWenquirymenu:ElementFinder
    menu9option:ElementFinder

    constructor(){

        this.EXWenquirymenu=element(by.css('div#first-level>div:first-child>div:nth-child(2)>a'));
        this.menu9option=element(by.css('div#third-level>div:first-child>div:nth-child(4)'));
    }

    public async clickEXWmenu() {
        
      await this.EXWenquirymenu.click();
    }

    public async clickmenu9()
    {
       await this.menu9option.click();
    }
}