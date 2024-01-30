import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CredentialsService {
  constructor(private http: HttpClient) {}

  enviornment: string = "http://localhost:3000";

  addAttendance(post_attendance_data: any) {
    return this.http.post(
      this.enviornment + "/post_attendance_data",
      post_attendance_data
    );
  }

  registerUser(DetailsofUser: any) {
    return this.http.post(
      this.enviornment + "/RegesteredDetails",
      DetailsofUser
    );
  }
}
