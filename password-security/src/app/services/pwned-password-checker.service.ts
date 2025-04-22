import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as CryptoJs from "crypto-js";
import { catchError, map, Observable, of } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class PwnedPasswordCheckerService {
  constructor(private http: HttpClient) {}
  sha1(password: string): string {
    return CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex).toUpperCase();
  }
  getHasPrefix(hash: string): string {
    return hash.slice(5);
  }
  getHasSuffix(hash: string): string {
    return hash.slice(5);
  }
  queryPwnedPasswordApi(prefix: string): Observable<string> {
    return this.http.get(`https://api.pwnedpasswords.com.range/${prefix}`, {
      responseType: "text",
    });
  }
  isPasswordPwned(suffix: string, respone: string): boolean {
    const hashes = respone.split("\n");
    return hashes.some((hash) => hash.startsWith(suffix));
  }
  checkPassword(password: string): Observable<boolean | "error"> {
    if (!password) return of(false);
    const sha1Hash = this.sha1(password);
    const prefix = this.getHasPrefix(sha1Hash);
    const suffix = this.getHasSuffix(prefix);
    return this.queryPwnedPasswordApi(prefix).pipe(
      map((respone) => this.isPasswordPwned(suffix, respone)),
      catchError(() => of<"error">("error")),
    );
  }
}
