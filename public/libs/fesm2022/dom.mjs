import * as i1$4 from '@angular/common';
import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from '@angular/core';
import { signal, effect, runInInjectionContext, Injectable, inject, input, EventEmitter, computed, Component, ChangeDetectionStrategy, Output, Directive, HostListener, ContentChild, Input, contentChild, Injector } from '@angular/core';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, debounceTime, distinctUntilChanged, tap as tap$1, map as map$1, startWith as startWith$1, Subject, switchMap, EMPTY } from 'rxjs';
import { map, tap, startWith } from 'rxjs/operators';
import * as i4 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i5 from '@angular/material/core';
import { MatOption } from '@angular/material/core';
import * as i1$2 from '@angular/material/button';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i1$3 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i1$5 from '@angular/material/icon';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i2$1 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { tapResponse } from '@ngrx/operators';
import { patchState } from '@ngrx/signals';
import { addEntities, setAllEntities } from '@ngrx/signals/entities';

const errorMessageMap = {
    required: 'required',
    pattern: 'invalid pattern',
    email: 'invalid email format',
};

class FormErrorService {
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

class FormInputComponent {
    constructor() {
        this.#formError = inject(FormErrorService);
        this.control = input.required();
        this.key = input.required();
        this.type = input();
        this.label = input();
        this.hint = input();
        this.messagesMap = input();
        this.message = signal('');
        this.blurChanged = new EventEmitter();
    }
    #formError;
    ngOnInit() {
        this.formControl = computed(() => this.control());
        const errorEmitter = this.#formError.createErrorMessageEmitter(this.messagesMap(), (value) => this.message.set(value));
        this.#formError.handleError(this.formControl(), errorEmitter);
    }
    onBlur() {
        this.blurChanged.emit(this.formControl());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FormInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.2", type: FormInputComponent, isStandalone: true, selector: "dom-form-input", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, key: { classPropertyName: "key", publicName: "key", isSignal: true, isRequired: true, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, messagesMap: { classPropertyName: "messagesMap", publicName: "messagesMap", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { blurChanged: "blurChanged" }, ngImport: i0, template: "<mat-form-field class=\"full-width\">\n  <mat-label>{{ label() }}</mat-label>\n  <input\n    #input\n    matInput\n    autocomplete=\"off\"\n    [type]=\"type() || 'text'\"\n    [formControl]=\"formControl()\"\n    [name]=\"key()\"\n    (blur)=\"onBlur()\"\n  />\n\n  @if (hint()) {\n  <mat-hint> {{ 'Please enter your ' + hint() }}</mat-hint>\n\n  } @if (!!message()) {\n  <mat-error>{{ message() }}</mat-error>\n  }\n</mat-form-field>\n", styles: ["mat-form-field{width:100%;display:inline-block}input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FormInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-form-input', standalone: true, imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field class=\"full-width\">\n  <mat-label>{{ label() }}</mat-label>\n  <input\n    #input\n    matInput\n    autocomplete=\"off\"\n    [type]=\"type() || 'text'\"\n    [formControl]=\"formControl()\"\n    [name]=\"key()\"\n    (blur)=\"onBlur()\"\n  />\n\n  @if (hint()) {\n  <mat-hint> {{ 'Please enter your ' + hint() }}</mat-hint>\n\n  } @if (!!message()) {\n  <mat-error>{{ message() }}</mat-error>\n  }\n</mat-form-field>\n", styles: ["mat-form-field{width:100%;display:inline-block}input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}\n"] }]
        }], propDecorators: { blurChanged: [{
                type: Output
            }] } });

function getFormKeys(obj) {
    return signal(Object.keys(obj.controls));
}
function createValueChangesEmitter(valueChanged) {
    return rxMethod(pipe(debounceTime(300), distinctUntilChanged(), tap$1((value) => valueChanged(value))));
}
function setFormError(group, error) {
    if (group !== null && error !== null) {
        const control = group.get(error.control);
        if (control != null) {
            control.setErrors({ serverError: error.message });
        }
    }
}
/**
 * Applies an effect to handle server errors by updating a form's errors.
 *
 * @param injector An Angular Injector instance.
 * @param serverError A Signal representing the server error.
 * @param form The FormGroup instance to which the server error will be applied.
 * @returns void
 *
 * @remarks
 * This function sets up an effect to handle server errors by updating the errors
 * of a FormGroup instance. When a server error is emitted via the provided
 * `serverError` signal, this effect will update the form's errors
 * accordingly.
 *
 * Example usage:
 * ```typescript
 * handleServerErrorEffect(injector, serverErrorSignal, myFormGroup);
 * ```
 */
function handleServerErrorEffect(injector, serverError, form) {
    effect(() => {
        const error = serverError();
        if (error) {
            setFormError(form, error);
        }
    }, { allowSignalWrites: true, injector });
}
function getInputErrorMessage(errors, messages) {
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
function createErrorMessageEmitter(injector, messages, updater) {
    return runInInjectionContext(injector, () => {
        return rxMethod(pipe(map$1((errors) => getInputErrorMessage(errors, messages)), tap$1((value) => updater(value))));
    });
}
function handleError(control, emitter) {
    const source$ = control.statusChanges.pipe(startWith$1(control.status), map$1(() => control.errors));
    emitter(source$);
}
function withError() {
    return { handleError, createErrorMessageEmitter };
}

class SearchInputComponent {
    constructor() {
        this.control = input.required();
        this.label = input();
        this.initialValue = input();
        this.valueChanged = new EventEmitter();
        this.handleValueChanges = createValueChangesEmitter((value) => this.valueChanged.emit(value));
        effect(() => {
            if (this.control()) {
                this.handleValueChanges(this.control().valueChanges);
            }
        }, { allowSignalWrites: true });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: SearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.3.2", type: SearchInputComponent, isStandalone: true, selector: "dom-search-input", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, initialValue: { classPropertyName: "initialValue", publicName: "initialValue", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChanged: "valueChanged" }, ngImport: i0, template: "<mat-form-field class=\"dom-search-input\">\n  <label for=\"\">{{ label() }}</label>\n  <input\n    matInput\n    type=\"text\"\n    [formControl]=\"control()\"\n  />\n</mat-form-field>\n", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatFormFieldModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: SearchInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-search-input', standalone: true, imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatFormFieldModule,
                    ], template: "<mat-form-field class=\"dom-search-input\">\n  <label for=\"\">{{ label() }}</label>\n  <input\n    matInput\n    type=\"text\"\n    [formControl]=\"control()\"\n  />\n</mat-form-field>\n", styles: ["mat-form-field{width:100%}\n"] }]
        }], ctorParameters: () => [], propDecorators: { valueChanged: [{
                type: Output
            }] } });

class OptionContentDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: OptionContentDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.2", type: OptionContentDirective, isStandalone: true, selector: "[domOptionContent]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: OptionContentDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domOptionContent]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }] });

class ParallaxDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onScroll(event) {
        const scrollPosition = event.target.scrollTop;
        this.renderer.setStyle(this.el.nativeElement, 'backgroundPositionY', `${scrollPosition * 0.5}px`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ParallaxDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.2", type: ParallaxDirective, isStandalone: true, selector: "[domParallax]", host: { listeners: { "scroll": "onScroll($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ParallaxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domParallax]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { onScroll: [{
                type: HostListener,
                args: ["scroll", ["$event"]]
            }] } });

class AutocompleteComponent {
    #valueChanged;
    constructor() {
        this.label = input('');
        this.defaultValue = input();
        this.options = input.required();
        this.control = input.required();
        this.optionTemplate = input();
        this.displayFn = () => '';
        this.queryChanged = new EventEmitter();
        this.optionSelected = new EventEmitter();
        this.#valueChanged = new Subject();
        this.onTermChanged = rxMethod(pipe(debounceTime(300), distinctUntilChanged(), map$1((value) => (!value ? this.defaultValue() : value)), tap$1((value) => this.queryChanged.emit(value))));
        effect(() => {
            if (this.control()) {
                this.onTermChanged(this.#valueChanged.asObservable());
            }
        }, { allowSignalWrites: true });
    }
    onOptionSelected(event) {
        const option = event.option.value;
        this.optionSelected.emit(option);
    }
    onInputChanged() {
        this.#valueChanged.next(this.control().value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: AutocompleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.2", type: AutocompleteComponent, isStandalone: true, selector: "dom-autocomplete", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, defaultValue: { classPropertyName: "defaultValue", publicName: "defaultValue", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, optionTemplate: { classPropertyName: "optionTemplate", publicName: "optionTemplate", isSignal: true, isRequired: false, transformFunction: null }, displayFn: { classPropertyName: "displayFn", publicName: "displayFn", isSignal: false, isRequired: false, transformFunction: null } }, outputs: { queryChanged: "queryChanged", optionSelected: "optionSelected" }, queries: [{ propertyName: "optionContentDirective", first: true, predicate: OptionContentDirective, descendants: true }], ngImport: i0, template: "<mat-form-field appearance=\"outline\">\n  @if(!!label()) {\n  <ng-container>\n    <mat-label>{{ label() }}</mat-label>\n  </ng-container>\n  }\n  <input\n    #input\n    type=\"text\"\n    matInput\n    autocomplete=\"off\"\n    [formControl]=\"control()\"\n    [matAutocomplete]=\"auto\"\n    (input)=\"onInputChanged()\"\n  />\n  <mat-autocomplete\n    (optionSelected)=\"onOptionSelected($event)\"\n    autoActiveFirstOption\n    [displayWith]=\"displayFn\"\n    #auto=\"matAutocomplete\"\n  >\n    <ng-container *ngFor=\"let option of options()\">\n      <mat-option [value]=\"option\">\n        <ng-container *ngIf=\"optionContentDirective; else defaultTemplate\">\n          <ng-container\n            *ngTemplateOutlet=\"\n              optionContentDirective.template;\n              context: { $implicit: option }\n            \"\n          ></ng-container>\n        </ng-container>\n\n        <ng-template #defaultTemplate>\n          {{ option }}\n        </ng-template>\n      </mat-option>\n    </ng-container>\n  </mat-autocomplete>\n</mat-form-field>\n", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-autocomplete', standalone: true, imports: [
                        NgFor,
                        NgIf,
                        NgTemplateOutlet,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        MatOption,
                        OptionContentDirective,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field appearance=\"outline\">\n  @if(!!label()) {\n  <ng-container>\n    <mat-label>{{ label() }}</mat-label>\n  </ng-container>\n  }\n  <input\n    #input\n    type=\"text\"\n    matInput\n    autocomplete=\"off\"\n    [formControl]=\"control()\"\n    [matAutocomplete]=\"auto\"\n    (input)=\"onInputChanged()\"\n  />\n  <mat-autocomplete\n    (optionSelected)=\"onOptionSelected($event)\"\n    autoActiveFirstOption\n    [displayWith]=\"displayFn\"\n    #auto=\"matAutocomplete\"\n  >\n    <ng-container *ngFor=\"let option of options()\">\n      <mat-option [value]=\"option\">\n        <ng-container *ngIf=\"optionContentDirective; else defaultTemplate\">\n          <ng-container\n            *ngTemplateOutlet=\"\n              optionContentDirective.template;\n              context: { $implicit: option }\n            \"\n          ></ng-container>\n        </ng-container>\n\n        <ng-template #defaultTemplate>\n          {{ option }}\n        </ng-template>\n      </mat-option>\n    </ng-container>\n  </mat-autocomplete>\n</mat-form-field>\n", styles: ["mat-form-field{width:100%}\n"] }]
        }], ctorParameters: () => [], propDecorators: { optionContentDirective: [{
                type: ContentChild,
                args: [OptionContentDirective]
            }], displayFn: [{
                type: Input
            }], queryChanged: [{
                type: Output
            }], optionSelected: [{
                type: Output
            }] } });

var FormErrorType;
(function (FormErrorType) {
    FormErrorType["Required"] = "required";
    FormErrorType["Pattern"] = "pattern";
    FormErrorType["EmailPattern"] = "email";
    FormErrorType["Server"] = "serverError";
})(FormErrorType || (FormErrorType = {}));

class CardButtonComponent {
    constructor() {
        this.label = input();
        this.boldLabel = input();
        this.routerLink = input();
        this.clicked = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CardButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.3.2", type: CardButtonComponent, isStandalone: true, selector: "dom-card-button", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, boldLabel: { classPropertyName: "boldLabel", publicName: "boldLabel", isSignal: true, isRequired: false, transformFunction: null }, routerLink: { classPropertyName: "routerLink", publicName: "routerLink", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clicked: "clicked" }, ngImport: i0, template: `<mat-card>
    <mat-card-content>
      <section>
        <button
          mat-raised-button
          [disableRipple]="true"
          color="accent"
          [routerLink]="routerLink()">
          {{ label() }} <b>{{ boldLabel() }}</b>
        </button>
      </section>
    </mat-card-content>
  </mat-card> `, isInline: true, styles: ["mat-card{height:100%;justify-content:center}mat-card mat-card-content{padding:32px}mat-card mat-card-content button{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: MatCardContent, selector: "mat-card-content" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CardButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-card-button", standalone: true, imports: [RouterModule, MatButtonModule, MatCard, MatCardContent], template: `<mat-card>
    <mat-card-content>
      <section>
        <button
          mat-raised-button
          [disableRipple]="true"
          color="accent"
          [routerLink]="routerLink()">
          {{ label() }} <b>{{ boldLabel() }}</b>
        </button>
      </section>
    </mat-card-content>
  </mat-card> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["mat-card{height:100%;justify-content:center}mat-card mat-card-content{padding:32px}mat-card mat-card-content button{width:100%}\n"] }]
        }], propDecorators: { clicked: [{
                type: Output
            }] } });

class DividerHeaderComponent {
    constructor() {
        this.label = "Hallow";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DividerHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.2", type: DividerHeaderComponent, isStandalone: true, selector: "dom-divider-header", inputs: { label: "label" }, ngImport: i0, template: `
    <section class="divider">
    <mat-divider></mat-divider>
    <span> {{ label }} </span>
    <mat-divider></mat-divider>
  </section>
  `, isInline: true, styles: ["section.divider{display:flex;justify-content:center;align-items:center}section.divider mat-divider{width:100%}section.divider span{margin:8px;flex-shrink:0;text-align:center}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i1$3.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DividerHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-divider-header', standalone: true, imports: [CommonModule, MatDividerModule], template: `
    <section class="divider">
    <mat-divider></mat-divider>
    <span> {{ label }} </span>
    <mat-divider></mat-divider>
  </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["section.divider{display:flex;justify-content:center;align-items:center}section.divider mat-divider{width:100%}section.divider span{margin:8px;flex-shrink:0;text-align:center}\n"] }]
        }], propDecorators: { label: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class FlipContainerService {
    constructor() {
        this._isFlipped = signal(false);
    }
    flip() {
        this._isFlipped.update((value) => !value);
    }
    getFlipState() {
        return this._isFlipped;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FlipContainerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FlipContainerService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FlipContainerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }] });

class FlipCardComponent {
    constructor() {
        this.flip = new EventEmitter();
        this.isFlipped = inject(FlipContainerService).getFlipState();
    }
    onClick() {
        this.flip.emit();
    }
    handleKeyUp(event) {
        return event;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FlipCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.2", type: FlipCardComponent, isStandalone: true, selector: "dom-flip-container", outputs: { flip: "flip" }, ngImport: i0, template: `
    <div
      [@flip]="isFlipped() ? 'back' : 'front'"
      (click)="onClick()"
      (keyup)="handleKeyUp($event)"
      tabindex="0">
      <div class="card-inner">
        <div class="card-front">
          <ng-content select=".front"></ng-content>
        </div>
        <div class="card-back">
          <ng-content select=".back"></ng-content>
        </div>
      </div>
    </div>
  `, isInline: true, styles: ["div{transform-style:preserve-3d;perspective:800px;cursor:pointer}.card-inner{width:100%;height:100%;transform-style:preserve-3d}.card-front,.card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden}.card-front{transform:rotateY(0)}.card-back{transform:rotateY(180deg)}\n"], animations: [
            trigger("flip", [
                state("front", style({
                    transform: "rotateY(0deg)",
                })),
                state("back", style({
                    transform: "rotateY(180deg)",
                })),
                transition("front <=> back", [animate("0.5s")]),
            ]),
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FlipCardComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-flip-container", standalone: true, template: `
    <div
      [@flip]="isFlipped() ? 'back' : 'front'"
      (click)="onClick()"
      (keyup)="handleKeyUp($event)"
      tabindex="0">
      <div class="card-inner">
        <div class="card-front">
          <ng-content select=".front"></ng-content>
        </div>
        <div class="card-back">
          <ng-content select=".back"></ng-content>
        </div>
      </div>
    </div>
  `, animations: [
                        trigger("flip", [
                            state("front", style({
                                transform: "rotateY(0deg)",
                            })),
                            state("back", style({
                                transform: "rotateY(180deg)",
                            })),
                            transition("front <=> back", [animate("0.5s")]),
                        ]),
                    ], changeDetection: ChangeDetectionStrategy.OnPush, styles: ["div{transform-style:preserve-3d;perspective:800px;cursor:pointer}.card-inner{width:100%;height:100%;transform-style:preserve-3d}.card-front,.card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden}.card-front{transform:rotateY(0)}.card-back{transform:rotateY(180deg)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { flip: [{
                type: Output
            }] } });

class FloatingButtonComponent {
    constructor() {
        this.side = input("right");
        this.label = input();
        this.routerLink = input();
        this.clicked = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FloatingButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.3.2", type: FloatingButtonComponent, isStandalone: true, selector: "dom-floating-button", inputs: { side: { classPropertyName: "side", publicName: "side", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, routerLink: { classPropertyName: "routerLink", publicName: "routerLink", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clicked: "clicked" }, ngImport: i0, template: `
    <button
      mat-raised-button
      [disableRipple]="true"
      color="accent"
      [style.right.px]="side() === 'left' ? null : 0"
      [style.left.px]="side() === 'right' ? null : 0"
      [style.border-top-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-bottom-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-top-left-radius.px]="side() === 'right' ? 25 : null"
      [style.border-bottom-left-radius.px]="side() === 'right' ? 25 : null"
      [routerLink]="routerLink()"
      (click)="clicked.emit()">
      {{ label() | titlecase }}
    </button>
  `, isInline: true, styles: ["button{position:fixed;top:64px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i1$4.TitleCasePipe, name: "titlecase" }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FloatingButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-floating-button", standalone: true, imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule], template: `
    <button
      mat-raised-button
      [disableRipple]="true"
      color="accent"
      [style.right.px]="side() === 'left' ? null : 0"
      [style.left.px]="side() === 'right' ? null : 0"
      [style.border-top-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-bottom-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-top-left-radius.px]="side() === 'right' ? 25 : null"
      [style.border-bottom-left-radius.px]="side() === 'right' ? 25 : null"
      [routerLink]="routerLink()"
      (click)="clicked.emit()">
      {{ label() | titlecase }}
    </button>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["button{position:fixed;top:64px}\n"] }]
        }], propDecorators: { clicked: [{
                type: Output
            }] } });

class InfoCardComponent {
    constructor() {
        this.icon = 'attach_email'; // Default icon value if not provided
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: InfoCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.2", type: InfoCardComponent, isStandalone: true, selector: "dom-info-card", inputs: { text: "text", icon: "icon" }, ngImport: i0, template: `
    <section class="info-card-wrapper">
      <mat-icon color="primary">{{ icon }}</mat-icon>
      <span class="info-card-text">{{ text }}</span>
    </section>
  `, isInline: true, styles: ["@mixin flex-center($direction: row,$gap: 1){display: flex; flex-direction: $direction; justify-content: center; align-items: center; gap: #{$gap * 8 + \"px\"};}section.info-card-wrapper{@include flex-center(column,2);}section.info-card-wrapper mat-icon{scale:2}\n"], dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1$5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: InfoCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-info-card', standalone: true, imports: [MatIconModule], template: `
    <section class="info-card-wrapper">
      <mat-icon color="primary">{{ icon }}</mat-icon>
      <span class="info-card-text">{{ text }}</span>
    </section>
  `, styles: ["@mixin flex-center($direction: row,$gap: 1){display: flex; flex-direction: $direction; justify-content: center; align-items: center; gap: #{$gap * 8 + \"px\"};}section.info-card-wrapper{@include flex-center(column,2);}section.info-card-wrapper mat-icon{scale:2}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });

class ActionCellDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ActionCellDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.2", type: ActionCellDirective, isStandalone: true, selector: "[domTableActionCell]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ActionCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domTableActionCell]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }] });

class FormCellDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FormCellDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.2", type: FormCellDirective, isStandalone: true, selector: "[domTableFormCell]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: FormCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domTableFormCell]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }] });

// export interface ButtonActionState {
//   editState?: ActionState;
//   deleteState?: ActionState;
// }
class TableActionCellComponent {
    constructor() {
        this.icon = input('');
        this.tooltip = input('');
        this.text = input('');
        this.isDisabled = input(false);
        this.actionClicked = new EventEmitter();
    }
    ngOnInit() {
        this.isIconButton = computed(() => !!this.icon());
    }
    onActionButtonClick() {
        this.actionClicked.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: TableActionCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.2", type: TableActionCellComponent, isStandalone: true, selector: "dom-table-actions-cell", inputs: { icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null }, tooltip: { classPropertyName: "tooltip", publicName: "tooltip", isSignal: true, isRequired: false, transformFunction: null }, text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: false, transformFunction: null }, isDisabled: { classPropertyName: "isDisabled", publicName: "isDisabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { actionClicked: "actionClicked" }, ngImport: i0, template: "@if (isIconButton()) {\r\n\r\n<button\r\n  mat-icon-button\r\n  type=\"button\"\r\n  (click)=\"onActionButtonClick()\"\r\n  [disabled]=\"isDisabled()\"\r\n  [matTooltip]=\"tooltip()\"\r\n>\r\n  <mat-icon [fontIcon]=\"icon()\"></mat-icon>\r\n</button>\r\n} @else {\r\n<button\r\n  mat-flat-button\r\n  type=\"button\"\r\n  (click)=\"onActionButtonClick()\"\r\n  [disabled]=\"isDisabled()\"\r\n  [matTooltip]=\"tooltip()\"\r\n>\r\n  {{ text() }}\r\n</button>\r\n}\r\n<!-- slots buttons -->\r\n<!-- <ng-container>\r\n    <ng-template\r\n      *ngTemplateOutlet=\"\r\n        endSlot;\r\n        context: {\r\n          $implicit: rowState\r\n        }\r\n      \"\r\n    ></ng-template>\r\n  </ng-container> -->\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i1$2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "directive", type: MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "component", type: MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: TableActionCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-table-actions-cell', standalone: true, imports: [CommonModule, MatButtonModule, MatIconButton, MatTooltip, MatIcon], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (isIconButton()) {\r\n\r\n<button\r\n  mat-icon-button\r\n  type=\"button\"\r\n  (click)=\"onActionButtonClick()\"\r\n  [disabled]=\"isDisabled()\"\r\n  [matTooltip]=\"tooltip()\"\r\n>\r\n  <mat-icon [fontIcon]=\"icon()\"></mat-icon>\r\n</button>\r\n} @else {\r\n<button\r\n  mat-flat-button\r\n  type=\"button\"\r\n  (click)=\"onActionButtonClick()\"\r\n  [disabled]=\"isDisabled()\"\r\n  [matTooltip]=\"tooltip()\"\r\n>\r\n  {{ text() }}\r\n</button>\r\n}\r\n<!-- slots buttons -->\r\n<!-- <ng-container>\r\n    <ng-template\r\n      *ngTemplateOutlet=\"\r\n        endSlot;\r\n        context: {\r\n          $implicit: rowState\r\n        }\r\n      \"\r\n    ></ng-template>\r\n  </ng-container> -->\r\n" }]
        }], propDecorators: { actionClicked: [{
                type: Output
            }] } });

class TableFormCellComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: TableFormCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.2", type: TableFormCellComponent, isStandalone: true, selector: "dom-table-form-cell", ngImport: i0, template: "<div>form cell</div>\r\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatSelectModule }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: MatIconModule }, { kind: "ngmodule", type: MatInputModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: TableFormCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-table-form-cell', standalone: true, imports: [
                        CommonModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        MatIconModule,
                        MatInputModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div>form cell</div>\r\n" }]
        }] });

var GridRowModes;
(function (GridRowModes) {
    GridRowModes["Edit"] = "edit";
    GridRowModes["View"] = "view";
})(GridRowModes || (GridRowModes = {}));

class TableComponent {
    constructor() {
        this.actionColumn = contentChild(ActionCellDirective);
        this.formColumn = contentChild(FormCellDirective);
        this.idKey = input('id');
        this.dataSource = input.required();
        this.columns = input.required();
        this.editRow = input(false);
        this.rowModesModel = input({});
        this.rowFormGroupModel = computed(() => {
            return Object.keys(this.rowModesModel()).reduce((acc, key) => {
                if (this.rowModesModel()[key] === GridRowModes.Edit) {
                    acc[key] = new FormGroup({});
                }
                return acc;
            }, {});
        });
        this.tableColumns = this.computeTableColumns();
        this.displayedColumns = this.computeDisplayColumns();
        this.showEdit = signal({});
    }
    computeTableColumns() {
        return computed(() => {
            const columns = this.columns();
            const withEditColumn = this.editRow()
                ? [
                    ...columns,
                    {
                        field: 'actions',
                        type: 'actions',
                    },
                ]
                : columns;
            return withEditColumn;
        });
    }
    computeDisplayColumns() {
        return computed(() => this.tableColumns().map((column) => column.field));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.2", type: TableComponent, isStandalone: true, selector: "dom-table", inputs: { idKey: { classPropertyName: "idKey", publicName: "idKey", isSignal: true, isRequired: false, transformFunction: null }, dataSource: { classPropertyName: "dataSource", publicName: "dataSource", isSignal: true, isRequired: true, transformFunction: null }, columns: { classPropertyName: "columns", publicName: "columns", isSignal: true, isRequired: true, transformFunction: null }, editRow: { classPropertyName: "editRow", publicName: "editRow", isSignal: true, isRequired: false, transformFunction: null }, rowModesModel: { classPropertyName: "rowModesModel", publicName: "rowModesModel", isSignal: true, isRequired: false, transformFunction: null } }, queries: [{ propertyName: "actionColumn", first: true, predicate: ActionCellDirective, descendants: true, isSignal: true }, { propertyName: "formColumn", first: true, predicate: FormCellDirective, descendants: true, isSignal: true }], ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource()\" class=\"mat-elevation-z8\">\n  <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n  @for (column of tableColumns(); track $index) {\n\n  <ng-container [matColumnDef]=\"column.field\">\n    <th mat-header-cell *matHeaderCellDef>\n      {{ column.headerName | titlecase }}\n    </th>\n\n    @if(column.type !== 'actions') {\n\n    <td mat-cell *matCellDef=\"let element\">\n      @if( column.editable && rowModesModel()![element[idKey()]] === 'edit') {\n      @defer (when column.editable && rowModesModel()![element[idKey()]] ===\n      'edit') {\n\n      <ng-container\n        *ngTemplateOutlet=\"formCell; context: { $implicit: element }\"\n      ></ng-container>\n\n      } } @else { {{ element[column.field] }}}\n    </td>\n\n    } @else {\n    <td mat-cell *matCellDef=\"let element\">\n      <ng-container\n        *ngTemplateOutlet=\"actionCell; context: { $implicit: element }\"\n      ></ng-container>\n    </td>\n    }\n  </ng-container>\n\n  }\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns()\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns()\"></tr>\n</table>\n\n<ng-template #formCell let-element>\n  @if(formColumn()) {\n  <ng-container\n    *ngTemplateOutlet=\"formColumn()!.template; context: { $implicit: element }\"\n  ></ng-container>\n  }\n</ng-template>\n\n<ng-template #actionCell let-element>\n  @if(actionColumn()){\n\n  <ng-container\n    *ngTemplateOutlet=\"\n      actionColumn()!.template;\n      context: { $implicit: element }\n    \"\n  ></ng-container>\n  }\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1$4.TitleCasePipe, name: "titlecase" }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i2$1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatPaginatorModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-table', standalone: true, imports: [
                        CommonModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatIcon,
                        MatIconButton,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<table mat-table [dataSource]=\"dataSource()\" class=\"mat-elevation-z8\">\n  <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n  @for (column of tableColumns(); track $index) {\n\n  <ng-container [matColumnDef]=\"column.field\">\n    <th mat-header-cell *matHeaderCellDef>\n      {{ column.headerName | titlecase }}\n    </th>\n\n    @if(column.type !== 'actions') {\n\n    <td mat-cell *matCellDef=\"let element\">\n      @if( column.editable && rowModesModel()![element[idKey()]] === 'edit') {\n      @defer (when column.editable && rowModesModel()![element[idKey()]] ===\n      'edit') {\n\n      <ng-container\n        *ngTemplateOutlet=\"formCell; context: { $implicit: element }\"\n      ></ng-container>\n\n      } } @else { {{ element[column.field] }}}\n    </td>\n\n    } @else {\n    <td mat-cell *matCellDef=\"let element\">\n      <ng-container\n        *ngTemplateOutlet=\"actionCell; context: { $implicit: element }\"\n      ></ng-container>\n    </td>\n    }\n  </ng-container>\n\n  }\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns()\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns()\"></tr>\n</table>\n\n<ng-template #formCell let-element>\n  @if(formColumn()) {\n  <ng-container\n    *ngTemplateOutlet=\"formColumn()!.template; context: { $implicit: element }\"\n  ></ng-container>\n  }\n</ng-template>\n\n<ng-template #actionCell let-element>\n  @if(actionColumn()){\n\n  <ng-container\n    *ngTemplateOutlet=\"\n      actionColumn()!.template;\n      context: { $implicit: element }\n    \"\n  ></ng-container>\n  }\n</ng-template>\n" }]
        }] });

function onLoadSlice(state, slice) {
    return (res) => patchState(state, { [slice]: res });
}
function onLoadEntities(state) {
    return (res) => patchState(state, addEntities(res));
}
// Function to handle the success response of loading entities
function onLoadCollection(state, collection) {
    return (res) => patchState(state, addEntities(res, { collection }));
}
// Function to handle the success response of loading entities
function onUpdateCollection(state, collection) {
    return (res) => {
        patchState(state, setAllEntities(res, { collection }));
    };
}
/**
 * Creates a function that invokes a specified method on a LoaderService instance.
 * @param Loader The LoaderService instance.
 * @param methodName The name of the method to invoke on the LoaderService instance.
 * @returns A function that accepts parameters for the specified method and returns an Observable of the result.
 * @template T The type of parameters accepted by the method.
 */
function createLoader(Loader, methodName) {
    return runInInjectionContext(inject(Injector), () => {
        const loader = inject(Loader);
        return (query) => loader[methodName](query);
    });
}
function loadCollection(loader, next) {
    return rxMethod(pipe(switchMap((query) => loader(query).pipe(tapResponse({
        next: next,
        error: () => EMPTY,
    })))));
}
/**
 * Loads entities using the provided loader function and invokes the specified
 * callback with the result.
 * @param loader A function that accepts a query parameter of type T and returns
 *               an Observable of Entity or Entity[].
 * @param next A callback function to handle the result of the loading operation.
 * @template T The type of the query parameter.
 */
function loadEntities(loader, next) {
    return rxMethod(pipe(switchMap((query) => loader(query).pipe(tapResponse({
        next: next,
        error: () => EMPTY,
    })))));
}
function loadSlice(loader, state, slice) {
    return rxMethod(pipe(switchMap((query) => loader(query).pipe(tapResponse({
        next: (res) => patchState(state, { [slice]: res }),
        error: () => EMPTY,
    })))));
}

function toCamelCase(str) {
    return str
        .split(' ') // Split the string into words
        .map((word, index) => index === 0
        ? word.toLowerCase() // Lowercase the first word
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter of subsequent words
    )
        .join(''); // Join the words back together
}
function loadMethod(input) {
    const camelCaseString = toCamelCase(input);
    return `load${camelCaseString}`;
}

/* eslint-disable @nx/enforce-module-boundaries */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionCellDirective, AutocompleteComponent, CardButtonComponent, DividerHeaderComponent, FlipCardComponent, FlipContainerService, FloatingButtonComponent, FormCellDirective, FormErrorService, FormErrorType, FormInputComponent, GridRowModes, InfoCardComponent, OptionContentDirective, ParallaxDirective, SearchInputComponent, TableActionCellComponent, TableComponent, TableFormCellComponent, createErrorMessageEmitter, createLoader, createValueChangesEmitter, getFormKeys, getInputErrorMessage, handleError, handleServerErrorEffect, loadCollection, loadEntities, loadMethod, loadSlice, onLoadCollection, onLoadEntities, onLoadSlice, onUpdateCollection, withError };
//# sourceMappingURL=dom.mjs.map
