import { Subject } from 'rxjs';

const clicks$ = new Subject();

clicks$.next('clicked -1');
clicks$.next('clicked -2');
clicks$.subscribe({
    next(x) { console.log('got value ' + x); },
    complete() { console.log('done'); }
});

clicks$.next('clicked -3');




export default clicks$;
