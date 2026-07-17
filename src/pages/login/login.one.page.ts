import { Locator, Page } from '@playwright/test'

 
export class LoginPage {

    readonly page: Page;
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByTestId('auth-email');
        this.passwordInput = page.getByTestId('auth-password');
        this.submitButton = page.getByTestId('auth-submit');
    }


    async fillEmail(email: string){
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string){
        await this.passwordInput.fill(password);
    }

    async clickLoginUser(){
        await this.submitButton.click();
    }

    async loginUser(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginUser();
    }
}