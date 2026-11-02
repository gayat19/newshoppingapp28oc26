import { Observable } from 'rxjs';

const tick$ = new Observable(subscriber => {
    let n = 0;
    const id = setInterval(() => {
        subscriber.next(n++);
    }, 1000);

    return () => clearInterval(id);//cleanup code- called when we unsubscribe from the observable
});

export default tick$;