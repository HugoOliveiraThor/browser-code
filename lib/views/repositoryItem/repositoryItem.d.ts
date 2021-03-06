import { Http } from 'angular2/http';
import { RouteParams } from 'angular2/router';
export declare class MapToIterable {
    transform(dict: any): any[];
}
export declare class RepositoryItem {
    http: Http;
    ls: any;
    accessToken: string;
    repository: any;
    readme: string;
    id: string;
    package: string;
    header: boolean;
    constructor(http: Http, params: RouteParams);
    ngOnInit(): void;
    back(): void;
    getContent(): void;
    getRepository(): void;
    getReadme(): void;
}
