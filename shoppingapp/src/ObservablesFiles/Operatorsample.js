import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const source$ = of(1, 2, 3, 4, 5)
    .pipe(
        filter(x => x % 2 === 0),
        map(x => x * 10) 
    );
    
export default source$;