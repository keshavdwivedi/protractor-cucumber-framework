import { Given,When,Then } from "cucumber";
import { utils } from "../Utility/util";
import { browser } from "protractor";
import { homepageclass } from "../pageobjects/menu9.PO";


let utilobj=new utils();
let obj1=new homepageclass();

Given('User opens Website', async function () {
 await utilobj.launchURL(browser.params.url);
  });

  When('Click on EXW menu option', async function () {
   await obj1.clickEXWmenu();
  });

When('Click on WSSYSNDFK Daily Receivals menu', async function () {
  await obj1.clickmenu9();
  });

  Then('Menu Nine homepage gets displayed', function () {
   console.log("Menu 9 option reached"); 
  });