import { BehaviorSubject, Subject } from "rxjs";

export class SubjectManager {
    subject$ = new BehaviorSubject(false);      // una hermosa solución cuando dos componentes se montan a la ves y su unico evento es la aparición de un compoennte de manera inicial, pero si disponemos de botones para eventos usamos Subject tranquilamente

    getSubject() {
        return this.subject$.asObservable();
    }

    setSubject ( value : boolean) {
        this.subject$.next(value)
    }
}