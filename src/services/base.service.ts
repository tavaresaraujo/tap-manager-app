import { HttpHeaders } from '@angular/common/http';

export abstract class BaseService 
{


    protected UrlTapService: string = "https://localhost:44346/api/";

    //protected UrlServiceAuth: string = "http://oppintraneth:1000/api/";
    //protected UrlServiceAuth: string = "http://oppintranet01:1100/api/";
    //protected UrlServiceAvaliacao: string = "https://localhost:44319/api/v1/";
    //protected UrlServiceAvaliacao: string = "http://oppintraneth:4321/api/v1/";
    //protected UrlServiceAvaliacao: string = "http://oppintranet01:3000/api/v1/";

    protected GetHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }


    // protected ObterHeaderJson() {
    //     return {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json'
    //         })
    //     };
    // }

    // protected ObterHeaderJsonToken() {
    //     return {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${this.getUserToken()}`
    //         })
    //     };
    // }

    // public getPayLoadJwt(response: any, login: any) {
    //     //get payload jwt
    //     let jwt = response.token;
    //     let jwtData = jwt.split('.')[1];
    //     let decodedJwtJsonData = window.atob(jwtData);
    //     let decodedJwtData = JSON.parse(decodedJwtJsonData);
    //     let nome = decodedJwtData.nome;
    //     let idUsuario = decodedJwtData.id;
    //     let dtExpiracaoToken = decodedJwtData.exp;
    
    //     this.setAuthLocalStorage(jwt, nome, idUsuario, decodedJwtData.role, login, dtExpiracaoToken);
    // }

    // public setAuthLocalStorage(token: string, nome: string, idUsuario: any, roles: Array<any>, login: any, dtExpiracaoToken: any) {
    //     localStorage.setItem('ava.token', token);
    //     localStorage.setItem('ava.nome', nome);
    //     localStorage.setItem('ava.idUsuario', idUsuario);
    //     localStorage.setItem('ava.roles', JSON.stringify(roles));
    //     localStorage.setItem('ava.login', login);
    //     localStorage.setItem('ava.dtExpToken', dtExpiracaoToken);
    //     localStorage.setItem('ava.sistema', '32');
    // }

    // public setUserLocalStorage(ehChefe: any, idSistema: any, idArea: any, dataAvaliacaoVigente: any, vinculo: any, flagSistemaBloqueado: any) {
    //     localStorage.setItem('ava.ehChefe', ehChefe);
    //     localStorage.setItem('ava.idSistema', idSistema);
    //     localStorage.setItem('ava.idArea', idArea);
    //     localStorage.setItem('ava.dataAvaliacaoVigente', dataAvaliacaoVigente);
    //     localStorage.setItem('ava.vinculo', vinculo);
    //     localStorage.setItem('ava.flagSis', flagSistemaBloqueado);
    // }

    // public getUserEhChefe(): string {
    //     return localStorage.getItem('ava.ehChefe');
    // }

    // public getUserIdSistema(): string {
    //     return localStorage.getItem('ava.idSistema');
    // }

    // public getUserIdArea(): string {
    //     return localStorage.getItem('ava.idArea');
    // }

    // public getFlagSistemaBloqueado(): string {
    //     return localStorage.getItem('ava.flagSis');
    // }

    // public getDataAvaliacaoVigente(): string {
    //     return localStorage.getItem('ava.dataAvaliacaoVigente');
    // }

    // public getUserVinculo(): string {
    //     return localStorage.getItem('ava.vinculo');
    // }

    // public getUserLogin(): string {
    //     return localStorage.getItem('ava.login');
    // }

    // public getUserToken(): string {
    //     return localStorage.getItem('ava.token');
    // }

    // public getDtExpToken(): string {
    //     return localStorage.getItem('ava.dtExpToken');
    // }

    // public getNomeUsuario(): string {
    //     return localStorage.getItem('ava.nome');
    // }

    // public getIdUsuario(): string {
    //     return localStorage.getItem('ava.idUsuario');
    // }

    // public getRoles(): any {
    //     return localStorage.getItem('ava.roles');
    // }

    // public getSistema(): any {
    //     return localStorage.getItem('ava.sistema');
    // }

    // public removeLocalStorage() {
    //     localStorage.clear();
    // }

    // public isAuthenticated() : boolean {
    //     let login = this.getUserLogin();
    //     if (this.tokenIsValid(this.getDtExpToken()) && login !== null)
    //         return true;
    //     else
    //         return false;
    // }

    // protected tokenIsValid(dtExpToken: any): boolean {
    //     if (Date.now() >= dtExpToken * 1000) {
    //         this.removeLocalStorage();
    //         return false;
    //     }
    //     return true;
    // }
}