import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//models

//services
import { BaseService } from './base.service';


@Injectable({
    providedIn: 'root'
  })

export class TapService extends BaseService {
    constructor(private http: HttpClient) { super() }

    GetTaps(): Observable<any> { return this.http.get(this.UrlTapService + 'taps/'); }

    CreateTap(tap): Observable<any> {return this.http.post(this.UrlTapService + 'taps/', JSON.stringify(tap), super.GetHeaderJson()); }

    // DesempenhoMetasEmpresa(dataAvaliacao: any): any {
    //     return this.http
    //         .get(this.UrlServiceAvaliacao + 'home/DesempenhoMetasEmpresa/' + dataAvaliacao, super.ObterHeaderJsonToken());
    // }

    // BuscarKPI(idUsuario: any, idArea: any, dataAvaliacao: any): any {
    //     return this.http
    //         .get(this.UrlServiceAvaliacao + 'home/BuscarKPI/' + idUsuario + '/' + idArea + '/' + dataAvaliacao, super.ObterHeaderJsonToken());
    // }

    // ListarMensagensMural(): any {
    //     return this.http
    //         .get(this.UrlServiceAvaliacao + 'home/ListarMensagensMural', super.ObterHeaderJsonToken());
    // }

    // ListarUsuarios(idUsuario: number): any {
    //     return this.http
    //         .get(this.UrlServiceAvaliacao + 'usuario/ListarUsuarios/' + idUsuario, super.ObterHeaderJsonToken());
    // }

    // ListarCriteriosAvaliacaoRegistro(): any {
    //     return this.http
    //         .get(this.UrlServiceAvaliacao + 'avaliacaoRegistro/ListarCriteriosAvaliacaoRegistro', super.ObterHeaderJsonToken());
    // }
    
    // ListarTipoNotaAvaliacaoRegistro(idCriterio: any): any {
    //     return this.http
    //         .get(this.UrlServiceAvaliacao + 'avaliacaoRegistro/ListarTipoNotaAvaliacaoRegistro/' + idCriterio, super.ObterHeaderJsonToken());
    // }

    // SalvarRegistroAvaliacao(registroAvaliacao: any): any {
    //     return this.http
    //         .post(this.UrlServiceAvaliacao + 'avaliacaoRegistro/Salvar', JSON.stringify(registroAvaliacao), super.ObterHeaderJsonToken());
    // }

    // ListarChefes(): any {
    //     return this.http
    //         .get(this.UrlServiceAvaliacao + 'usuario/ListarChefes', super.ObterHeaderJsonToken());
    // }

    // ListarFuncionariosChefe(idUsuarioChefe: any): any {
    //     return this.http
    //         .get(this.UrlServiceAvaliacao + 'usuario/ListarFuncionariosChefe/' + idUsuarioChefe, super.ObterHeaderJsonToken());
    // }

    // SalvarSolicitarRegistroAvaliacao(registroAvaliacao: any): any {
    //     return this.http
    //         .post(this.UrlServiceAvaliacao + 'avaliacaoRegistro/solicitar/Salvar', JSON.stringify(registroAvaliacao), super.ObterHeaderJsonToken());
    // }
}