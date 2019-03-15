import { browser } from "protractor";

export class utils{
    
    public launchURL(url:string){
        browser.get(url);
    }
}