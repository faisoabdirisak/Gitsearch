export class Repos {
    allRepo: { new(body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response; prototype: Response; error(): Response; redirect(url: string | URL, status?: number | undefined): Response; };
    constructor(public name:string,public html_url:string ,public description:string, public created_at:Date
        , public forks:number,public watchers:number, public language:string){
      }
}

