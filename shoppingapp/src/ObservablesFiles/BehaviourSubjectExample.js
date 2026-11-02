import { BehaviorSubject } from 'rxjs';
const count$ = new BehaviorSubject(0);
count$.next(1);

count$.subscribe({
    next(x) { console.log('got value ' + x); },
    complete() { console.log('done'); }
});

count$.next(2);
count$.next(3);

export default count$;
