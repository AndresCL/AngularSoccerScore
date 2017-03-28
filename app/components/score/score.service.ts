import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Score } from './score';

@Injectable()
export class ScoreService{

    private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

    constructor(private http : Http){
    }

    // Getting feed
    getFeedContent(url: string): Observable<Score> {
        return this.http.get(this.rssToJsonServiceBaseUrl + url)
                .map(this.extractFeeds)
                .catch(this.handleError);
    }

    // Extracting fields
    private extractFeeds(res: Response): Score {
        let feed = res.json();
        return feed || { };
    }
    
    private handleError (error: any) {
        // log error
        // could be something more sofisticated
        let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
        console.error(errorMsg);

        // throw an application level error
        return Observable.throw(errorMsg);
    }

}