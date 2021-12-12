import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message/message.service';
import { Observable, of } from 'rxjs';

const baseUrl = '/services/rest';
const processId = 'streaming_alerts_system.subscribe-process';
const containerId = 'procurement-process_1.0.0-SNAPSHOT';
const user = 'rhpam';
const password = 'redhatpam1!'
//services/rest/server/containers/procurement-process_1.0.0-SNAPSHOT/processes/procurement-process.OrderAsset/instances

//const user = 'adminUser';
//const password = 'RedHat'


const headers: HttpHeaders = new HttpHeaders()
  .append('Content-Type', 'application/json')
  .append('Authorization', 'Basic ' + btoa(`${user}:${password}`));

const httpOptions: any = {
  headers: headers
};

@Injectable({
  providedIn: 'root'
})
export class KieService {
  constructor(private messageService: MessageService, private http: HttpClient) { }

  startProcess(alertName: string, threshold: number, location: string, startDate: Date, endDate: Date): Observable<any> {
    const url = `${baseUrl}/server/containers/${containerId}/processes/${processId}/instances`;
    const body = {
      alertName: alertName, threshold: threshold, location: location, startDate: startDate, endDate: endDate
    };
    
    return this.http.post<any>(url, body, httpOptions).pipe(
      catchError(res => this.handleError('process()', res))
    );
  }

  getProcesses(): Observable<any> {
    const url = `${baseUrl}/server/containers/${containerId}/processes/instances`;
    return this.http.get<any>(url, httpOptions).pipe(
      catchError(res => this.handleError('getProcesses()', res))
    );
  }

  getImage(processInstanceId: string) {
    const url = `${baseUrl}/server/containers/${containerId}/images/processes/instances/${processInstanceId}`;
    httpOptions.responseType = 'text' as 'text';

    return this.http.get(url, httpOptions).pipe(
      catchError(res => this.handleError('getImage()', res))
    )
  }

  getTasks(): Observable<any> {
    const url = `${baseUrl}/server/queries/tasks/instances/pot-owners`;
    return this.http.get<any>(url, httpOptions).pipe(
      catchError(res => this.handleError('getTasks()', res))
    );
  }

  getTask(taskInstanceId: number): Observable<any> {
    const url = `${baseUrl}/server/containers/${containerId}/tasks/${taskInstanceId}/contents/input`;
    return this.http.get<any>(url, httpOptions).pipe(
      catchError(res => this.handleError('getTask()', res))
    );
  }

  claim(taskInstanceId: number): Observable<any> {
    const url = `${baseUrl}/server/containers/${containerId}/tasks/${taskInstanceId}/states/claimed`;
    return this.http.put<any>(url, null, httpOptions).pipe(
      catchError(res => this.handleError('claim()', res))
    );
  }

  start(taskInstanceId: number): Observable<any> {
    const url = `${baseUrl}/server/containers/${containerId}/tasks/${taskInstanceId}/states/started`;
    return this.http.put<any>(url, null, httpOptions).pipe(
      catchError(res => this.handleError('start()', res))
    );
  }

  managementcomplete(taskInstanceId: number, approval: boolean): Observable<any> {
    const url = `${baseUrl}/server/containers/${containerId}/tasks/${taskInstanceId}/states/completed`;
    const body = {
      approved: approval
    };
    return this.http.put<any>(url, body, httpOptions).pipe(
      catchError(res => this.handleError('complete()', res))
    );
  }

  complete(taskInstanceId: number, targetPrice: number, urgency: string ): Observable<any> {
    const url = `${baseUrl}/server/containers/${containerId}/tasks/${taskInstanceId}/states/completed`;
    const body = {
      targetPrice: targetPrice,
      urgency: urgency 
    };
    return this.http.put<any>(url, body, httpOptions).pipe(
      catchError(res => this.handleError('complete()', res))
    );
  }

  suppliercomplete(taskInstanceId: number, supplierPrice: number): Observable<any> {
    const url = `${baseUrl}/server/containers/${containerId}/tasks/${taskInstanceId}/states/completed`;
    const body = {
      supplierPrice: supplierPrice
    };
    return this.http.put<any>(url, body, httpOptions).pipe(
      catchError(res => this.handleError('complete()', res))
    );
  }

  private handleError(method: string, res: HttpErrorResponse): Observable<any> {
    this.messageService.error(`${method} ${res.message}`);
    console.error(res.error);
    return of(null);
  }
}
