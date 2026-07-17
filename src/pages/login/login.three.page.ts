import { Page } from '@playwright/test'
 

export class LoginPage {

    readonly page: Page;

    private readonly Locators = {
        emailInput: 'auth-email',
        passwordInput: 'auth-password',
        submitButton: 'auth-submit',
    }

    constructor(page: Page) {
        this.page = page;
    }

    async fillEmail(email: string){
        await this.page.getByTestId(this.Locators.emailInput).fill(email);
    }

    async fillPassword(password: string){
        await this.page.getByTestId(this.Locators.passwordInput).fill(password);
    }

    async clickLoginUser(){
        await this.page.getByTestId(this.Locators.submitButton).click();
    }

    async loginUser(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginUser();
    }
}