import { Injectable, Injector, effect, runInInjectionContext, signal, } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { errorMessageMap } from './constants';
import * as i0 from "@angular/core";
export class FormErrorService {
    constructor(injector) {
        this.injector = injector;
        this.errors = signal({});
    }
    handleServerErrorEffect(serverError, form) {
        effect(() => {
            const error = serverError();
            if (error) {
                this.setFormError(form, error);
            }
        }, { allowSignalWrites: true, injector: this.injector });
    }
    setFormError(group, error) {
        if (group !== null && error !== null) {
            const control = group.get(error.control);
            if (control != null) {
                control.setErrors({ serverError: error.message });
            }
        }
    }
    createErrorMessageEmitter(messages, updater) {
        return runInInjectionContext(this.injector, () => {
            return rxMethod(pipe(map((errors) => this.getInputErrorMessage(errors, messages)), tap((value) => updater(value))));
        });
    }
    handleError(control, emitter) {
        const source$ = control.statusChanges.pipe(startWith(control.status), map(() => control.errors));
        emitter(source$);
    }
    getInputErrorMessage(errors, messages) {
        if (errors) {
            const errorKeys = Object.keys(errors);
            const errorMap = {
                ...errors,
                ...errorMessageMap,
                ...messages,
            };
            for (const error of errorKeys) {
                return errorMap[error];
            }
        }
        return '';
    }
    handleErrorMap(group, messages) {
        group.statusChanges.pipe(startWith(group.status), map(() => {
            const formKeys = Object.keys(group.controls);
            for (const key of formKeys) {
                const controlErrors = group.controls[key].errors;
                this.errors.update((value) => ({
                    ...value,
                    ...messages,
                    [key]: { ...controlErrors },
                }));
            }
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FormErrorService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FormErrorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FormErrorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i0.Injector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zcmMvbGliL2RvbS9jb21wb25lbnRzL2Zvcm0vZm9ybS1lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsUUFBUSxFQUdSLE1BQU0sRUFDTixxQkFBcUIsRUFDckIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQWMsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBTTlDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUV0QyxXQUFNLEdBQXFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUZiLENBQUM7SUFJMUMsdUJBQXVCLENBQ3JCLFdBQWdELEVBQ2hELElBQWU7UUFFZixNQUFNLENBQ0osR0FBRyxFQUFFO1lBQ0gsTUFBTSxLQUFLLEdBQUcsV0FBVyxFQUFFLENBQUM7WUFFNUIsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQyxFQUNELEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQ3JELENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQWdCLEVBQUUsS0FBc0I7UUFDM0QsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNyQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFpQixDQUFDLENBQUM7WUFFbkQsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDcEQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQseUJBQXlCLENBQ3ZCLFFBQXNDLEVBQ3RDLE9BQWdDO1FBRWhDLE9BQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDL0MsT0FBTyxRQUFRLENBQ2IsSUFBSSxDQUNGLEdBQUcsQ0FBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUMvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUM1QyxFQUNELEdBQUcsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3ZDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FDVCxPQUFvQixFQUNwQixPQUErRDtRQUUvRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFDekIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FDMUIsQ0FBQztRQUVGLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRU8sb0JBQW9CLENBQzFCLE1BQXdCLEVBQ3hCLFFBQXNDO1FBRXRDLElBQUksTUFBTSxFQUFFLENBQUM7WUFDWCxNQUFNLFNBQVMsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWhELE1BQU0sUUFBUSxHQUFHO2dCQUNmLEdBQUcsTUFBTTtnQkFDVCxHQUFHLGVBQWU7Z0JBQ2xCLEdBQUcsUUFBUTthQUNaLENBQUM7WUFFRixLQUFLLE1BQU0sS0FBSyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUM5QixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQztRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFnQixFQUFFLFFBQTBCO1FBQ3pELEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUN0QixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUN2QixHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsS0FBSyxNQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBRWpELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM3QixHQUFHLEtBQUs7b0JBQ1IsR0FBRyxRQUFRO29CQUNYLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLGFBQWEsRUFBRTtpQkFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OEdBaEdVLGdCQUFnQjtrSEFBaEIsZ0JBQWdCLGNBRmYsTUFBTTs7MkZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBTaWduYWwsXG4gIFdyaXRhYmxlU2lnbmFsLFxuICBlZmZlY3QsXG4gIHJ1bkluSW5qZWN0aW9uQ29udGV4dCxcbiAgc2lnbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyByeE1ldGhvZCB9IGZyb20gJ0BuZ3J4L3NpZ25hbHMvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHBpcGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBlcnJvck1lc3NhZ2VNYXAgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGb3JtU2VydmVyRXJyb3IgfSBmcm9tICcuL3R5cGVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1FcnJvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBlcnJvcnM6IFdyaXRhYmxlU2lnbmFsPFZhbGlkYXRpb25FcnJvcnM+ID0gc2lnbmFsKHt9KTtcblxuICBoYW5kbGVTZXJ2ZXJFcnJvckVmZmVjdChcbiAgICBzZXJ2ZXJFcnJvcjogU2lnbmFsPEZvcm1TZXJ2ZXJFcnJvciB8IHVuZGVmaW5lZD4sXG4gICAgZm9ybTogRm9ybUdyb3VwXG4gICk6IHZvaWQge1xuICAgIGVmZmVjdChcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBzZXJ2ZXJFcnJvcigpO1xuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHRoaXMuc2V0Rm9ybUVycm9yKGZvcm0sIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgYWxsb3dTaWduYWxXcml0ZXM6IHRydWUsIGluamVjdG9yOiB0aGlzLmluamVjdG9yIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRGb3JtRXJyb3IoZ3JvdXA6IEZvcm1Hcm91cCwgZXJyb3I6IEZvcm1TZXJ2ZXJFcnJvcik6IHZvaWQge1xuICAgIGlmIChncm91cCAhPT0gbnVsbCAmJiBlcnJvciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGdyb3VwLmdldChlcnJvci5jb250cm9sIGFzIHN0cmluZyk7XG5cbiAgICAgIGlmIChjb250cm9sICE9IG51bGwpIHtcbiAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoeyBzZXJ2ZXJFcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVFcnJvck1lc3NhZ2VFbWl0dGVyKFxuICAgIG1lc3NhZ2VzOiBWYWxpZGF0aW9uRXJyb3JzIHwgdW5kZWZpbmVkLFxuICAgIHVwZGF0ZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gICk6IChzb3VyY2UkOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPikgPT4gdm9pZCB7XG4gICAgcmV0dXJuIHJ1bkluSW5qZWN0aW9uQ29udGV4dCh0aGlzLmluamVjdG9yLCAoKSA9PiB7XG4gICAgICByZXR1cm4gcnhNZXRob2Q8VmFsaWRhdGlvbkVycm9ycz4oXG4gICAgICAgIHBpcGUoXG4gICAgICAgICAgbWFwKChlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMpID0+XG4gICAgICAgICAgICB0aGlzLmdldElucHV0RXJyb3JNZXNzYWdlKGVycm9ycywgbWVzc2FnZXMpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0YXAoKHZhbHVlOiBzdHJpbmcpID0+IHVwZGF0ZXIodmFsdWUpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoXG4gICAgY29udHJvbDogRm9ybUNvbnRyb2wsXG4gICAgZW1pdHRlcjogKHNvdXJjZSQ6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+KSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnN0IHNvdXJjZSQgPSBjb250cm9sLnN0YXR1c0NoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aChjb250cm9sLnN0YXR1cyksXG4gICAgICBtYXAoKCkgPT4gY29udHJvbC5lcnJvcnMpXG4gICAgKTtcblxuICAgIGVtaXR0ZXIoc291cmNlJCk7XG4gIH1cblxuICBwcml2YXRlIGdldElucHV0RXJyb3JNZXNzYWdlKFxuICAgIGVycm9yczogVmFsaWRhdGlvbkVycm9ycyxcbiAgICBtZXNzYWdlczogVmFsaWRhdGlvbkVycm9ycyB8IHVuZGVmaW5lZFxuICApOiBzdHJpbmcge1xuICAgIGlmIChlcnJvcnMpIHtcbiAgICAgIGNvbnN0IGVycm9yS2V5czogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhlcnJvcnMpO1xuXG4gICAgICBjb25zdCBlcnJvck1hcCA9IHtcbiAgICAgICAgLi4uZXJyb3JzLFxuICAgICAgICAuLi5lcnJvck1lc3NhZ2VNYXAsXG4gICAgICAgIC4uLm1lc3NhZ2VzLFxuICAgICAgfTtcblxuICAgICAgZm9yIChjb25zdCBlcnJvciBvZiBlcnJvcktleXMpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTWFwW2Vycm9yXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBoYW5kbGVFcnJvck1hcChncm91cDogRm9ybUdyb3VwLCBtZXNzYWdlczogVmFsaWRhdGlvbkVycm9ycykge1xuICAgIGdyb3VwLnN0YXR1c0NoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aChncm91cC5zdGF0dXMpLFxuICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybUtleXMgPSBPYmplY3Qua2V5cyhncm91cC5jb250cm9scyk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGZvcm1LZXlzKSB7XG4gICAgICAgICAgY29uc3QgY29udHJvbEVycm9ycyA9IGdyb3VwLmNvbnRyb2xzW2tleV0uZXJyb3JzO1xuXG4gICAgICAgICAgdGhpcy5lcnJvcnMudXBkYXRlKCh2YWx1ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgICAgLi4ubWVzc2FnZXMsXG4gICAgICAgICAgICBba2V5XTogeyAuLi5jb250cm9sRXJyb3JzIH0sXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==