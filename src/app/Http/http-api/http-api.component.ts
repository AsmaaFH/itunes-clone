import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-http-api',
  standalone: true,
  templateUrl: './http-api.component.html',
  styleUrl: './http-api.component.scss',
})
export class HttpApiComponent {
  apiRoot: string = 'http://httpbin.org';

  constructor(private http: HttpClient) {}
  
  doGET() {
    console.log('GET');
    let url = `${this.apiRoot}/get`;
    const httpOptions = {
      params: new HttpParams().set('foo', 'moo').set('limit', '25'),
    };
    this.http.get(url, httpOptions).subscribe((res) => console.log(res));
  }

  doPOST() {
    console.log('POST');
    let url = `${this.apiRoot}/post`;
    const httpOptions = {
      params: new HttpParams().set('foo', 'moo').set('limit', '25'),
    };
    this.http.post(url, { moo: 'foo', goo: 'loo' }, httpOptions).subscribe((res) => console.log(res));
  }


  doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/put`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http
      .put(url, { moo: "foo", goo: "loo" }, httpOptions)
      .subscribe(res => console.log(res));
  }

  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http.delete(url, httpOptions).subscribe(res => console.log(res));
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}/get`;
    this.http
      .get(url)
      .toPromise()
      .then(res => console.log(res));
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http
      .get(url)
      .toPromise()
      .then(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http
      .get(url)
      .subscribe(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }
  doGETWithHeaders() {
    console.log("GET WITH HEADERS");

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: btoa("username:password")
      })
    };

    let url = `${this.apiRoot}/get`;

    this.http
      .get(url, httpOptions)
      .subscribe(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }
}
