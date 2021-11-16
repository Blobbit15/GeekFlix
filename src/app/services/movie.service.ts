import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private http:HttpClient) {}

    getMovies(): Observable<any>{
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=f978123fd64232003899489b6b8e5b88&with_genres=878`
        return this.http.get(url).pipe(map((data: any) => data.results))
    }

    getSimilarMovies(id: number){
        let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=f978123fd64232003899489b6b8e5b88`
        return this.http.get(url).pipe(map((data: any) => data.results))
    }
}